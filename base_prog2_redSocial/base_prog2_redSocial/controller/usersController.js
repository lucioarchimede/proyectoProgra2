const dataBase = require ('../db/data');
const db = require ('../database/models')
const bcrypt = require('bcryptjs');
const post = db.Post
const comment = db.Comment
const user = db.User

const usersController = {
    login: function (req, res) {
        // console.log("email: " + req.body.email)
        console.log("password: " + req.body.password)
        return res.render("index", {
            user: dataBase.usuario

        });
    },
    register: function (req, res) {
        if (req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('register')
        }

    },
    store:function(req, res) {
        let errors = {};

        let emailBuscar = req.body.email;
        let filtrado = {
           where:[{email:emailBuscar}]
        }
        res.send({
            emailBuscar
        }
        )
       user.findOne(filtrado)
       .then(function (resultado) {
        
           if (resultado != null) {
               errors.message= 'El email ingresado ya existe';
               res.locals.errors = errors;
           return res.render('register')
           }else{
            
           }
       })
       .catch(function (error) {
           console.log(error);
       })

        if (req.body.email == "") {
            errors.message = 'El campo de email no puede estar vacío';
            res.locals.errors = errors;
            return res.render('register')

        } else if (req.body.password == ''){
            errors.message= 'La contraseña no puede ser vacía';
            res.locals.errors = errors;
            return res.render('register')

        }else if (req.body.password.length <=3){
            errors.message= 'La contraseña debe tener más de 3 caracteres';
            res.locals.errors = errors;
            return res.render('register')

        } else{
            let datos = req.body;
            let fotoPerfilStore = '/images/users/perfilDefault.png';
            if (datos.fotoPerfil != "") {
                fotoPerfilStore = datos.fotoPerfil
            }
            
            let guardarPerfil = {
                usuario: datos.usuario,
                email: datos.email,
                contrasenia: bcrypt.hashSync(datos.password, 10),
                fotoPerfil: fotoPerfilStore, // opcional
                fechaNacimiento: datos.fecha_nacimiento,
                remember_token: ""
            };

            db.user.create(guardarPerfil)
            .then(function(result) {
                return res.redirect('/users/login');
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    },
    edit: function (req, res) {
        console.log("body: " + req.body.email)
        return res.render("index", {})

    },
    detalle: function (req, res) {
        let id = req.params.usuarioId
       let usuarioEn= []

        for (let i = 0; i < dataBase.posteos.length; i++) {
           if(id == dataBase.posteos[i].usuarioId){
            usuarioEn.push(dataBase.posteos[i])
           }
        }
        console.log(usuarioEn);
        res.render("detalleUsuario", {usuario: usuarioEn})
    },
    perfil: function (req, res) {
        let usuario = 'MatiGimenez'
        let usuarioEn = []
 
         for (let i = 0; i < dataBase.posteos.length; i++) {
            if(usuario == dataBase.posteos[i].nombreUsuario){
             usuarioEn.push(dataBase.posteos[i])
            }
         }
 
        res.render("miPerfil", {usuario: usuarioEn})


    },
}


module.exports = usersController

