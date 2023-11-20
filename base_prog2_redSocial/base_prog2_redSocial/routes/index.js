var express = require('express');
var router = express.Router();
var usersController= require('../controller/usersController');
const postController = require('../controller/postController');
const indexController = require('../controller/indexController');

/* GET home page. */



router.get('/',indexController.home );


router.post('/',usersController.loginPost);





module.exports = router;
