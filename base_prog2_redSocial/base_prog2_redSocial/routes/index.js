var express = require('express');
var router = express.Router();
var loginController= require('../controller/loginController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.post('/login',loginController.login);


module.exports = router;
