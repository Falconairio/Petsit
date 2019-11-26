var express = require('express');
var router = express.Router();
const profileRouter = require('./profile')
const User = require('./../models/User');
const Pet = require('./../models/Pet');

router.get('/', (req, res, next) => {
    User.findById(req.session.currentUser._id)
    .then((result) => {
      Pet.findById(result.pets)
      .then( (data) => {
        console.log(data.petPictureUrl);
        res.render('postlogin-views/profile', {title: 'User Profile', user: result, pet: data})
      })
      .catch( (err) => console.log(err));
    }).catch((err) => {
      console.log(err);
    })
  });

module.exports = router;
