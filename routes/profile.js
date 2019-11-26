var express = require('express');
var router = express.Router();
const profileRouter = require('./profile')
const User = require('./../models/User');

router.get('/', (req, res, next) => {
    User.findById(req.session.currentUser._id)
    .then((result) => {
      res.render('postlogin-views/profile', {title: 'User Profile', user: result})
    }).catch((err) => {
      console.log(err);
    })
    ;
  });

module.exports = router;
