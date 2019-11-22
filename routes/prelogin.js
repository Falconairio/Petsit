var express = require('express');
var router = express.Router();

//const signupRouter = require('./signup');

//router.use('/signup',signupRouter)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {title: 'Login to Petsit'});
});

module.exports = router;
