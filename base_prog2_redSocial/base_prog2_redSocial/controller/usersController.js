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
        let id = req.params.idUser
        let usuarioEn = []
       
       for (let i = 0; i < dataBase.posteos; i++) {
        if (id == dataBase.posteos[i].idUser) {
            usuarioEn.push(dataBase.posteos[i])
            
        }

        
       }
        return res.render("miPerfil", {usuario: usuarioEn})


    },
}


module.exports = usersController

