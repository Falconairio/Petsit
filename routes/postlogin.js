var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
  res.render('postlogin-views/homepage', {title: 'Welcome to Petsit'});
});

module.exports = router;
