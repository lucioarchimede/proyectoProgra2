const dataBase = require ('../db/data');

const usersController = {
    login: function (req, res) {
        // console.log("email: " + req.body.email)
        console.log("password: " + req.body.password)
        return res.render("index", {

            user: dataBase.usuario

        });
    },
    register: function (req, res) {
        console.log("body: " + req.body.email)
        return res.render("register", {
            user: dataBase.usuario
        })

    },
    edit: function (req, res) {
        console.log("body: " + req.body.email)
        return res.render("index", {})

    },
    detalle: function (req, res) {
        return res.render("detalleusuario", {usuario: dataBase.usuario[1]})

    },
    perfil: function (req, res) {
        let posteos = dataBase.posteos.filter (x=>x.idUser===dataBase.usuario[1].id)
        return res.render("miPerfil", {usuario: dataBase.usuario[1],posts:posteos})


    },
}


module.exports = usersController

