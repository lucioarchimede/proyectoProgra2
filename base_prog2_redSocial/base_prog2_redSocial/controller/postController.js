const dataBase = require('../db/data');
const db = require('../database/models')
const bcrypt = require('bcryptjs');
const posts = require('../database/models/posts');
const post = db.Post
const comment = db.Comment
const user = db.User;
const op = db.Sequelize.Op;


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
        let searchResults = req.query.search;

        let filtro = {
            include: {
                all: true,
                nested: true
            },
            where: [
                {
                    [op.or]: [
                        { textoDescriptivo: { [op.like]: '%' + searchResults + '%' } },
                        { nombreImagen: { [op.like]: '%' + searchResults + '%' } }
                    ]
                }
            ],
            order: [["createdAt", "DESC"]]
        }
        post.findAll(filtro)
            .then((result) => {
                return res.render("resultadoBusqueda", {
                    search: searchResults,
                    post: result
                })

            })
            .catch((err) => {
                console.log(err);
            })
    },
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

