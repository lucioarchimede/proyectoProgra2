const express = require('express');
const router = express.Router();
const postController = require('../controller/postController')

router.get('/agregar',postController.guardarPost)

router.get('/detalle/:id',postController.detalle)

router.get('/buscar/:nombreUsuario',postController.searchResults)

router.get('/agregar', function(req, res, next) {
  res.render('agregarPost', { title: 'Agregar Post' });

});

router.post("/guardarPost",postController.guardarPost)



router.get('/detallePost/:id',postController.detalle);



module.exports = router;