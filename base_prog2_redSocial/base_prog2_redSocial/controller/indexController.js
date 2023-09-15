const dataBase = require('../db/data');



const indexController = {
    showIndex: function (req, res) {

        return res.render('index', {
            usuario: dataBase.usuario,
            productos: dataBase.productos,
            logueado: dataBase.usuario.logueado,
            posts: dataBase.posteos,

        })
    },
    showLogin: function (req, res) {
        return res.render('login', {
            usuario: dataBase.usuario,
            logueado: dataBase.usuario.logueado
        })
    },
    showRegister: function (req, res) {
        return res.render('register', {
            usuario: dataBase.usuario,
            logueado: dataBase.usuario.logueado
        })
    },
    home: function (req, res) {
        let usuarios = dataBase.usuario;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email === req.body.email) {
            }
        }
        if (usuarios[0] && usuarios[0].contrasena === req.body.password) {
            return res.render('index', {
                usuario: dataBase.usuario,
                productos: dataBase.productos,
                logueado: dataBase.usuario.logueado,
                posts: dataBase.posteos,
            })
        }
        else {
            return res.render('login', {
                usuario: dataBase.usuario,
                mensaje: "Credenciales invalidas",
                logueado: dataBase.usuario.logueado
            })
        }
    }
}

module.exports = indexController