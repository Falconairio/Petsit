var express = require('express');
var router = express.Router();
const User = require('../models/User');
  router.get('/', (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then( (user) => {
      if(user.pets === null) {
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
