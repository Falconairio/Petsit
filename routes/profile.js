var express = require('express');
var router = express.Router();

// GET '/logout'
router.get('/', (req, res, next) => {
    const { data } = req.session.currentUser;
    res.render('postlogin-views/profile', {title: 'User Profile'}, data);
  });

module.exports = router;
