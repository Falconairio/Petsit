var express = require('express');
var router = express.Router();
const User = require('./../models/User');
const Pet = require('./../models/Pet');

  router.get('/', (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then( (user) => {
      if(!user.pets) {
        console.log(user);
          res.render('postlogin-views/add-pet', {title: 'Add a Pet'});
      } else {
          Pet.findById(user.pets._id)
          .then( (pet) => {
            res.render('postlogin-views/user-requests', {title: 'Create a request' ,pet: pet});
          })
          .catch( (err) => console.log(err));
      }
    })  
    .catch( (err) => console.log(err)); 
  });
  

module.exports = router;

