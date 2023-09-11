const dataBase = require ('../db/data');


const postController = {
    guardarPost: function (req, res) {
        return res.render("index", {});
    },
    detalle: function (req, res) {
        // let posteos = dataBase.posteos.filter (x=>x.idUser===dataBase.usuario[1].id)
        return res.render("detallePost", {usuario: dataBase.usuario[1],posts:dataBase.posteos})


    },

}

module.exports = postController

