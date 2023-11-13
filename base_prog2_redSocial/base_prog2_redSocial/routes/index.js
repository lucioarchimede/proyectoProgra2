var express = require('express');
var router = express.Router();
var usersController= require('../controller/usersController');
const postController = require('../controller/postController');
const indexController = require('../controller/indexController');

/* GET home page. */



router.get('/index',indexController.showIndex );

router.post('/index',indexController.home);





module.exports = router;
