var express = require('express');
var router = express.Router();
var usersController= require('../controller/usersController');
const postController = require('../controller/postController');
const indexController = require('../controller/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', usersController.login);

router.post("/login", usersController.login);


router.get('/index',indexController.showIndex );

router.post('/index',indexController.home);


router.get('/registracion', function(req, res, next) {
  res.render('register', { title: 'registracion' });
});

router.post('/register',usersController.register );

router.post('/edit',usersController.edit );



router.get('/agregar', function(req, res, next) {
  res.render('agregarPost', { title: 'Agregar Post' });

});

router.post("/guardarPost",postController.guardarPost)



router.get('/detallePost/:id',postController.detalle);

router.get('/perfil',usersController.perfil);


router.get('/detalleUsuario',usersController.detalle);


router.get('/editarPerfil', function(req, res, next) {
  res.render('editarPerfil', { title: 'Editar perfil' });
});



module.exports = router;
