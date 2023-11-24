const dataBase = require("../db/data");
const db = require("../database/models");
const bcrypt = require("bcryptjs");
const posts = require("../database/models/posts");
const post = db.Post;
const comment = db.Comment;
const user = db.User;
const op = db.Sequelize.Op;

const postController = {
  agregarPost: function (req, res) {
    return res.render("agregarPost");
  },

  nuevoPost: function (req, res) {
    console.log("nuevo post");
    let nuevoPosteo = {
      idUsuario: req.session.user.id,
      nombreImagen: req.body.nombreImagen,
      textoDescriptivo: req.body.textoDescriptivo,
    };
    console.log("nuevo: ", nuevoPosteo);
    post
      .create(nuevoPosteo)
      .then((result) => {
        console.log(result);
        return res.redirect("/users/perfil");
      })
      .catch((error) => {
        console.log("error ", error);
        //* return res.send(error)
      });
  },

  detalle: function (req, res) {
    let id = req.params.id;
    console.log(id);
    let filtro = {
      include: [
        { association: "usuario" },
        { association: "comentario", include: [{ association: "usuario" }] },
      ],
    };

    post
      .findByPk(id, filtro)
      .then(function (result) {
        if (result == null) {
          res.send("No se encontró el posteo");
        } else {
          res.render("detallePost", { posts: result });
        }
      })
      .catch(function (error) {
        res.send(error);
      });
  },

  searchResults: function (req, res) {
    let searchResults = req.query.searchResults;
    console.log(searchResults);
    let errors = {};
    post
      .findAll({
        where: [{ textoDescriptivo: { [op.like]: "%" + searchResults + "%" } }],
        include: [{ all: true, nested: true }],
        order: [["createdAt", "DESC"]],
      })
      .then((datos) => {
        //   return res.send(datos)
        if (datos.length == 0) {
          errors.message = "No hay resultados para su busqueda";
          res.locals.errors = errors;
          return res.render("resultadoBusqueda", { datos: [] });
        } else {
          return res.render("resultadoBusqueda", { datos: datos });
        }
      })
      .catch((error) => {
        console.log(error);
        return res.send(error);
      });
  },

  getEditar: function (req, res) {
    if (req.session.user) {
      res.render("editarPost");
    } else {
      res.redirect("/users/login");
    }
  },

  editarPost: function (req, res) {
    if (req.session.user) {
      user.findByPk(req.session.user.id)
        .then(function (result) {
          if (result) {
            if (req.session.user.id === result.id) {
              res.render("editarPost", { posts: result });
            } else {
              res.send("No tiene permisos para editar este producto");
            }
          } else {
            res.send("No se encontró el usuario");
          }
        })
        .catch(function (error) {
          res.send(error);
        });
    } else {
      res.redirect("/users/login");
    }
  },

 
};

//*   let nombre = req.params.nombreUsuario;
//*  let usuarioEn = []

//*   for (let i = 0; i < dataBase.posteos.length; i++) {
//*    if(nombre == dataBase.posteos[i].nombreUsuario){
//*      usuarioEn.push(dataBase.posteos[i])
//*     }
//*    }

//*  res.render('resultadoBusqueda', {datos: usuarioEn});
//*   }

module.exports = postController;
