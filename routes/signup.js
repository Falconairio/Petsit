var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('prelogin-views/signup', {title: 'Signup to Petsit'});
});

module.exports = router;
