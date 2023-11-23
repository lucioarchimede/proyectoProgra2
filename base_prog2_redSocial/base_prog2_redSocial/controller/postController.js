const dataBase = require('../db/data');
const db = require('../database/models')
const bcrypt = require('bcryptjs');
const posts = require('../database/models/posts');
const post = db.Post
const comment = db.Comment
const user = db.User


const postController = {

    agregarPost: function(req,res){
        return res.render('agregarPost')
    },

    nuevoPost: function (req,res) {
        console.log("nuevo post");
        let nuevoPosteo = {
            idUsuario: req.session.user.id,
           nombreImagen : req.body.nombreImagen,
            textoDescriptivo: req.body.textoDescriptivo
        }
        console.log("nuevo: ",nuevoPosteo);
        post.create(nuevoPosteo)
        .then(result=> {
            console.log(result);
            return res.redirect('/users/perfil')
        })
        .catch((error)=> {
            console.log("error ",error);
           //* return res.send(error)
        })
        

        
    },


    detalle: function (req, res) {

        let id = req.params.id;
        let posteoEn = null;
            
        for (let i = 0; i < dataBase.posteos.length; i++) {
            if(dataBase.posteos[i].id == id){
            posteoEn = dataBase.posteos[i]
                 }
            }
    
        res.render('detallePost',{posts: posteoEn})
        // let posteos = dataBase.posteos.filter (x=>x.id==req.params.id) 
        // console.log("cantidad: "+posteos.length);
        // return res.render("detallePost", {usuario: dataBase.usuario[1],posts:posteos})


    },

    searchResults: function (req, res) {
        let searchResults = req.query.searchResults;
        
        let errors = {}
        post.findAll({
            where: [{ textoDescriptivo : { [op.like]: "%" + searchResults + "%" } }],
            include:[{all:true, nested: true}], order: [["createdAt","DESC"]]
        })
            .then((datosEncontrados) => {
                
            if (datosEncontrados.length == 0) {
                errors.message = "No hay resultados para su busqueda"
                res.locals.errors = errors
                return res.render("resultadoBusqueda")

            }else{ 
                return res.render('resultadoBusqueda', { datos: datosEncontrados })
            }
        })
        .catch((error) => {
            console.log(error)
            return res.send(error)
        })
}

}









     //*   let nombre = req.params.nombreUsuario; 
       //*  let usuarioEn = []
  
      //*   for (let i = 0; i < dataBase.posteos.length; i++) {
        //*    if(nombre == dataBase.posteos[i].nombreUsuario){
       //*      usuarioEn.push(dataBase.posteos[i])
       //*     }
     //*    }
  
       //*  res.render('resultadoBusqueda', {datos: usuarioEn}); 
  //*   } 

module.exports = postController

