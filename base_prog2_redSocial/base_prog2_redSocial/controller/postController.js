const dataBase = require('../db/data');
const db = require('../database/models')
const bcrypt = require('bcryptjs');
const posts = require('../database/models/posts');
const post = db.Post
const comment = db.Comment
<<<<<<< HEAD
const user = db.User
const op = db.Sequelize.Op
=======
const user = db.User;
const op = db.Sequelize.Op;
>>>>>>> 8ace60b8be854af3fcf793df9217f7126928d7a9


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
    
    detalle: function(req,res){
        let id = req.params.id;
    
        db.Post.findByPk(id,{
            include:[{all:true, nested: true}]
        })
        .then(function(result){
            // return res.send(result)
            return res.render('detallePost', {posts: result})
        })
        .catch(function(error){
            return res.send(error)
        }) 
    },
    

    searchResults: function (req, res) {
        let searchResults = req.body.searchResults;
        console.log(searchResults)
        let errors = {}
        post.findAll({
            where: [{ textoDescriptivo : { [op.like]: "%" + searchResults + "%" } }],
            include:[{all:true, nested: true}], order: [["createdAt","DESC"]]
        })
            .then((datos) => {
              return res.send(datos)  
            if (datos.length == 0) {
                errors.message = "No hay resultados para su busqueda"
                res.locals.errors = errors
                return res.render('resultadoBusqueda', { datos: [] })
                

            }else{ 
                return res.render('resultadoBusqueda', { datos: datos })
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

