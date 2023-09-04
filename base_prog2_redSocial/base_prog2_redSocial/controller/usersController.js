const dataBase = require ('../db/data');

const usersController = {
    login: function (req, res) {
        // console.log("email: " + req.body.email)
        // console.log("password: " + req.body.password)
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
}


module.exports = usersController

