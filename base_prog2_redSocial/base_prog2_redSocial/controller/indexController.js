const dataBase = require ('../db/data');


const indexController = {
    showIndex: function (req, res){
        let posteos = dataBase.posteos.filter (x=>x.idUser===dataBase.usuario[0].id)
        return res.render('index',{
            usuario: dataBase.usuario[0],
            productos: dataBase.productos,
            logueado: dataBase.usuario.logueado,
            posts:posteos,

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