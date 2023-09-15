const dataBase = require ('../db/data');


const postController = {
    guardarPost: function (req, res) {
        return res.render("index", {});
    },
    detalle: function (req, res) {
        let posteos = dataBase.posteos.filter (x=>x.id==req.params.id) 
        console.log("cantidad: "+posteos.length);
        return res.render("detallePost", {usuario: dataBase.usuario[1],posts:posteos})


    },

}

module.exports = postController

