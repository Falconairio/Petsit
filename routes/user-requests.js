var express = require('express');
var router = express.Router();
const User = require('./../models/User');

  router.get('/', (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then( (user) => {
      if(!user.pets) {
        console.log(user);
          res.render('postlogin-views/add-pet', {title: 'Add a Pet'});
      } else {
        router.get('/', (req, res, next) => {
          res.render('postlogin-views/user-requests', {title: 'Create a request'});
        });
      }
    })  
    .catch( (err) => console.log(err)); 
  });
  

module.exports = router;
