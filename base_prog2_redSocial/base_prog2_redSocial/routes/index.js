var express = require('express');
var router = express.Router();
var loginController= require('../controller/loginController');
const postController = require('../controller/postController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', usersController.login);

router.post("/login", usersController.login);


router.get('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/registracion', function(req, res, next) {
  res.render('register', { title: 'registracion' });
});

router.post('/register',usersController.register );

router.post('/edit',usersController.edit );



router.get('/agregar', function(req, res, next) {
  res.render('agregarPost', { title: 'Agregar Post' });

});

router.post("/guardarPost",postController.guardarPost)


router.get('/detallePost', function(req, res, next) {
  res.render('detallePost', { title: 'Detalle Post' });
});

router.get('/perfil', function(req, res, next) {
  res.render('miPerfil', { title: 'Mi perfil' });
});


router.get('/detalleUsuario', function(req, res, next) {
  res.render('detalleUsuario', { title: 'Detalle Usuario' });
});


router.get('/editarPerfil', function(req, res, next) {
  res.render('editarPerfil', { title: 'Editar perfil' });
});



module.exports = router;
