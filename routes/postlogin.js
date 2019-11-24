var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('postlogin-views/homepage', {title: 'Welcome to Petsit'});
});

module.exports = router;
