var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('postlogin-views/add-pet', {title: 'Add you pet'});
});

module.exports = router;
