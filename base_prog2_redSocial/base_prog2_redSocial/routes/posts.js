const express = require('express');
const router = express.Router();
const controller = require('../controller/postController')

router.get('/agregar',controller.guardarPost)

router.get('/detalle/:id',controller.detalle)

router.get('/buscar/:nombreUsuario',controller.searchResults)

module.exports = router;