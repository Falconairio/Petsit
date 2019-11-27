var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('postlogin-views/user-request', {title: 'Create a request'});
});

module.exports = router;
