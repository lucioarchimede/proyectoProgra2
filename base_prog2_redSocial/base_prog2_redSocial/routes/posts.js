const express = require('express');
const router = express.Router();
const postController = require('../controller/postController')



router.get('/detalle/:id',postController.detalle)

router.get('/agregar',postController.agregarPost)

router.get('/buscar',postController.searchResults)

router.post('/agregar', postController.nuevoPost)

router.get('/detallePost/:id',postController.detalle);



module.exports = router;