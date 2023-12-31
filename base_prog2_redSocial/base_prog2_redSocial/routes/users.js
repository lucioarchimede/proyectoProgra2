var express = require('express');
var router = express.Router();
const usersController = require("../controller/usersController")

// router.get('detalle/:idUser', usersController.detalle)
// router.get("/miPerfil/:idUser", usersController.perfil)
// router.get("/editar/idUser", usersController.edit)

router.get('/login', usersController.login)

router.post('/login', usersController.loginPost);


router.get('/register', usersController.register)

router.post('/register',usersController.store );

router.get('/logout', usersController.logout)

// router.post('/edit',usersController.edit );

router.get('/perfil',usersController.perfil); 


router.get('/detalle/:id',usersController.detalle);


// router.get('/editarPerfil', function(req, res, next) {
//   res.render('editarPerfil', { title: 'Editar perfil' });
// });


/* GET users listing. */



// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
