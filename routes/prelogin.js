var express = require('express');
var router = express.Router();

const signupRouter = require('./signup');

router.use('/signup',signupRouter)

router.get('/', function(req, res, next) {
  res.render('prelogin-views/login', {title: 'Login to Petsit'});
});

module.exports = router;
