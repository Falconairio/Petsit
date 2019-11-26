var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('postlogin-views/edit', {title: 'Edit your profile'});
});

module.exports = router;