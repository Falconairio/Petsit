var express = require('express');
var router = express.Router();

const signupRouter = require('./signup');
const authRouter = require('./auth');
const postloginRouter = require('./postlogin')

router.use('/signup',signupRouter)

router.use('/auth',authRouter)

router.use('/postlogin',postloginRouter)

router.get('/', function(req, res, next) {
  res.render('prelogin-views/login', {title: 'Login to Petsit'});
});

module.exports = router;
