var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const User = require('./../models/User');

  router.get('/', (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then( (user) => {
      if(!user.pets) {
=======
const User = require('../models/User');
  router.get('/', (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then( (user) => {
      if(user.pets === null) {
>>>>>>> f17c849e9a20d65e70b05786f766df497ebb174c
        console.log(user);
          res.render('postlogin-views/add-pet', {title: 'Add a Pet'});
      } else {
          console.log('bruh');
          res.render('postlogin-views/user-requests', {title: 'Create a request'});
      }
    })  
    .catch( (err) => console.log(err)); 
  });
  

module.exports = router;
