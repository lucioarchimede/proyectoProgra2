





const loginController = {
    login: function (req,res) {
        return res.render("index", {});
    },
    register: function (req,res) {
        return res.render("register",{})
        
    }
}







module.exports= loginController

