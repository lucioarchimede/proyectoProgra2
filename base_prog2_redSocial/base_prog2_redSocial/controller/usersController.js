const dataBase = require('../db/data');
const db = require('../database/models')
const bcrypt = require('bcryptjs');
const post = db.Post
const comment = db.Comment
const user = db.User

const usersController = {
    login: function (req, res) {
        console.log('login')
        if (req.session.user != undefined) {
            console.log('usuario ok')
            return res.render('/');
        } else {
            console.log('usuario mal')
            return res.render('login');
        }
    },
    loginPost: function(req,res){
        let emailBuscar = req.body.email;
        let passwordBuscar = req.body.password;

        let filtrado = {
            where: [
                {email: emailBuscar}
            ]
        }
        let errors = {}

        if (emailBuscar == undefined ) {
            errors.message = 'El email está vacío';
            res.locals.errors = errors;
            return res.render('login')

        } else if (passwordBuscar.length < 3) {
            errors.message = 'Las contraseñas requieren mas de 3 digitos';
            res.locals.errors = errors;
            return res.render('login')
        } else {
        
            user.findOne(filtrado)
            .then((result) => {

                if (result != null) {
                    let claveCorrecta = bcrypt.compareSync(passwordBuscar, result.password);
                    if (claveCorrecta) {
                        req.session.user = result.dataValues;
                        if (req.body.rememberme != undefined) {
                            res.cookie('userId', result.dataValues.id, { maxAge: 1000 * 60 * 100 })
                        }
                        return res.redirect("/")

                    } else {
                        errors.message = 'El email existe, pero la contraseña es incorrecta';
                        res.locals.errors = errors;
                        return res.render('login')
                    }
                } else {
                    errors.message = 'El email ingresado no existe';
                    res.locals.errors = errors;
                    return res.render('login')
                }
            }).catch((err) => {
                console.log(err);
            }); 

        }

    },

    register: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('register')
        }

    },
    store: async function (req, res) {
        let errors = {};

        let emailBuscar = req.body.email;
        let filtrado = {
            where: [{ email: emailBuscar }]
        }
        
        const resultado = await user.findOne(filtrado)
        console.log('usuario ', resultado)
        try{
            if (resultado != null) {
                errors.message = 'El email ingresado ya existe';
                res.locals.errors = errors;
                return res.render('register')
            } else {
                console.log('usuarionulo')
                console.log('body ******************', req.body)
                if (req.body.email == "") {
                    errors.message = 'El campo de email no puede estar vacío';
                    res.locals.errors = errors;
                    return res.render('register')

                } else if (req.body.password == '') {
                    errors.message = 'La contraseña no puede ser vacía';
                    res.locals.errors = errors;
                    return res.render('register')

                } else if (req.body.password.length <= 3) {
                    errors.message = 'La contraseña debe tener más de 3 caracteres';
                    res.locals.errors = errors;
                    return res.render('register')

                } else {
                    console.log('formulario correcto')
                    let datos = req.body;
                    let fotoPerfilStore = '/img/fotoPerfilDefault.webp';
                    console.log('foto: ', datos.fotoPerfil)
                    if (datos.fotoPerfil == undefined || datos.fotoPerfil != "") {
                        datos.fotoPerfil = fotoPerfilStore
                    }

                    let guardarPerfil = {
                        usuario: datos.usuario,
                        email: datos.email,
                        password: bcrypt.hashSync(datos.password, 10),
                        fotoPerfil: fotoPerfilStore, // opcional
                        fechaNacimiento: datos.fechadeNacimiento,
                        remember_token: "123"
                    };
                    console.log('usuario: ', guardarPerfil)

                    user.create(guardarPerfil)
                        .then(function (result) {
                            console.log('grabacion correcta')
                            // res.redirect('/users/login');
                            res.redirect('/users/login')

                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }

            }
        }
        catch(err){
            console.log('errorgeneral ', err)

        }
    },
    logout: function (req, res) {
        res.clearCookie("idUsuario");
        req.session.user = undefined
        return res.render('login')
    },
    detalle: function (req,res){
        let id = req.params.id
        //  let usuarioEncontrado = []
   
          usuarios.findByPk(id, {include:[{all:true, nested: true}], order: [["createdAt","DESC"]]})
          .then(function(result) {
             res.send(result);
             res.render("detalleUsuario", {usuario: result})   
          })
          .catch(error => console.log(error))
    },

    
    // edit: function (req, res) {
    //     console.log("body: " + req.body.email)
    //     return res.render("index", {})

    // },
    // detalle: function (req, res) {
    //     let id = req.params.usuarioId
    //     let usuarioEn = []

    //     for (let i = 0; i < dataBase.posteos.length; i++) {
    //         if (id == dataBase.posteos[i].usuarioId) {
    //             usuarioEn.push(dataBase.posteos[i])
    //         }
    //     }
    //     console.log(usuarioEn);
    //     res.render("detalleUsuario", { usuario: usuarioEn })
    // },
    // perfil: function (req, res) {
    //     let usuario = 'MatiGimenez'
    //     let usuarioEn = []

    //     for (let i = 0; i < dataBase.posteos.length; i++) {
    //         if (usuario == dataBase.posteos[i].nombreUsuario) {
    //             usuarioEn.push(dataBase.posteos[i])
    //         }
    //     }

    //     res.render("miPerfil", { usuario: usuarioEn })


    // },

}

module.exports = usersController

