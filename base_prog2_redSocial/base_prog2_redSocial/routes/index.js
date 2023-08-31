var express = require('express');
var router = express.Router();
var loginController= require('../controller/loginController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/',loginController.login);


router.get('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/registracion', function(req, res, next) {
  res.render('register', { title: 'registracion' });
});

router.get('/agregar', function(req, res, next) {
  res.render('agregarPost', { title: 'Agregar Post' });
});

router.get('/detallePost', function(req, res, next) {
  res.render('detallePost', { title: 'Detalle Post' });
});

router.get('/perfil', function(req, res, next) {
  res.render('miPerfil', { title: 'Mi perfil' });
});

router.get('/detalleUsuario', function(req, res, next) {
  res.render('detalleUsuario', { title: 'Detalle Usuario' });
});


module.exports = router;
