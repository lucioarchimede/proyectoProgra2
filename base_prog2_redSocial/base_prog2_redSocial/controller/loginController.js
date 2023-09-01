
const loginController = {
    login: function (req, res) {
        console.log("email: " + req.body.email)
        console.log("password: " + req.body.password)
        return res.render("index", {});
    },
    register: function (req, res) {
        console.log("body: " + req.body.email)
        return res.render("register", {})

    },
    edit: function (req, res) {
        console.log("body: " + req.body.email)
        return res.render("index", {})

    },
}


module.exports = loginController

