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
        console.log("result ", result);
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
      post.findByPk(req.params.id).then((resultado) => {
        res.render("editarPost", { posts: resultado });
      });
    } else {
      res.redirect("/users/login");
    }
  },

  editarPost: function (req, res) {
    let postitem = {
      id: req.params.id,
      textoDescriptivo: req.body.descripcionPost,
      nombreImagen: req.body.imagenPerfil,
    };
    post
      .update(postitem, { where: { id: req.params.id } })
      .then(function (result) {
        console.log("result editar: ", result);
        if (result) {
          console.log("userId: ", req.session.user.id);
          post
            .findAll({
              include: [
                {
                  idUsuario: req.session.user.id,
                  all: true,
                  nested: true,
                },
              ],
            })
            .then((list) => {
              console.log("list ***************************************", list);
              res.render("index", { posts: list }); //Ver q onda con esto
            });
        } else {
          res.send("No se encontró el usuario");
        }
      })
      .catch(function (error) {
        console.log("error ", error);
        res.send(error);
      });
  },
  borrar: function (req, res) {
    let idPost = req.params.id;

    if (req.session.user != undefined) {
      comment.destroy({
          where: { posteoId: idPost },
        })
        .then(function (result) {
          post.destroy({
            where: { id: idPost },
          });
        })
        .then(function (result) {
          return res.redirect("/users/miPerfil");
        })
        .catch(function (error) {
          return res.send(error);
        });
    } else {
      return res.render(`/posts/detallePost/${req.params.id}`);
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
