var express = require('express');
var router = express.Router();

// GET '/logout'
router.get('/', (req, res, next) => {
    res.render('postlogin-views/profile', {title: 'User Profile', user: req.session.currentUser});
  });

module.exports = router;
