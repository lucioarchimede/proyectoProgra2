const dataBase = require('../db/data');
const db = require ('../database/models')
const post = db.Post
const user = db.User
const comment = db.comment


const indexController = {
    showIndex: function (req, res) {
        post.findAll()
        .then((result)=>{
            res.send(result)

        })
        .catch((error)=>{
             console.log(error)
        })

            // return res.render('index', {
            //     usuario: dataBase.usuario,
            //     productos: dataBase.productos,
            //     logueado: dataBase.usuario.logueado,
            //     posts: dataBase.posteos,

            // })
    },
    // showLogin: function (req, res) {
    //     return res.render('login', {
    //         usuario: db.usuario,
    //         logueado: dataBase.usuario.logueado
    //     })
    // },
    // showRegister: function (req, res) {
    //     return res.render('register', {
    //         usuario: dataBase.usuario,
    //         logueado: dataBase.usuario.logueado
    //     })
    // },
    home: async function (req, res) {
        let posts = await post.findAll()

        for (let post of posts){
            let userPosts = await user.findByPk(post.idUsuario)
            // const comments = comment.findByPk(post.id)
            post.comments = []
            post.usuario = userPosts.usuario
        }
       
        res.render('index', {'posts': posts})
        // let usuarios = dataBase.usuario;
        // for (let i = 0; i < usuarios.length; i++) {
        //     if (usuarios[i].email == req.body.email) {
        //     }
        // }
        // if (usuarios[0] && usuarios[0].contrasena == req.body.password) {
        //     return res.render('index', {
        //         usuario: dataBase.usuario,
        //         productos: dataBase.productos,
        //         logueado: dataBase.usuario.logueado,
        //         posts: dataBase.posteos,
        //     })
        // }
        // else {
        //     return res.render('login', {
        //         usuario: dataBase.usuario,
        //         mensaje: "Credenciales invalidas",
        //         logueado: dataBase.usuario.logueado
        //     })
        // }
    }
}

module.exports = indexController