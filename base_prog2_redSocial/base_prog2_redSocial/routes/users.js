var express = require('express');
var router = express.Router();
const controller = require ("../controller/usersController");

router.get('detalle/:idUser', controller.detalle)
router.get("/miPerfil/:idUser", controller.perfil)
router.get("/editar/idUser", controller.edit)



/* GET users listing. */



// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
