const dataBase = require ('../db/data');



const indexController = {
    showIndex: function (req, res){

        return res.render('index',{
            usuario: dataBase.usuario,
            productos: dataBase.productos,
            logueado: dataBase.usuario.logueado,
            posts:dataBase.posteos,

        })
    },
    showLogin: function (req, res){
        return res.render('login',{
            usuario: dataBase.usuario,
            logueado: dataBase.usuario.logueado
        })
    },
    showRegister: function (req, res){
        return res.render('register',{
            usuario: dataBase.usuario,
            logueado: dataBase.usuario.logueado
        })
    }
}

module.exports = indexController