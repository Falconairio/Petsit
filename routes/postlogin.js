var express = require('express');
var router = express.Router();
const logoutRouter = require('./logout');
const profileRouter = require('./profile')

router.use('/logout', logoutRouter);
router.use('/profile', profileRouter);

router.get('/home', function(req, res, next) {
  res.render('postlogin-views/homepage', {title: 'Welcome to Petsit'});
});

module.exports = router;