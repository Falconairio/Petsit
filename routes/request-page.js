var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('postlogin-views/request-page', {title: 'Request'});
});

module.exports = router;
