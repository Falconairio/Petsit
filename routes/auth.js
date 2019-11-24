var express = require('express');
const zxcvbn = require('zxcvbn');
const User = require('./../models/User');
var router = express.Router();

// 0 - Require bcrypt
const bcrypt = require('bcrypt');
// 1 - Specify how many salt rounds
const saltRounds = 10;


// POST '/auth/signup'
router.post('/signup', (req, res, next) => {

  // 2 - Destructure the password and username
  const { email , password , picture, name , description } = req.body;

  // 3 - Check if the username and password are empty strings
  if (email === '' || password === '') {
    res.render('prelogin-views/signup', {
      errorMessage: 'Provide email and password.',
    });
    return;
  }
  // 4 - Check if the username already exists - if so send error

  User.findOne({ email })
    .then(user => {
      // > If username exists already send the error
      if (user) {
        res.render('prelogin-views/signup', {
          errorMessage: 'Username already exists.',
        });
        return;
      }

      // > If username doesn't exist, generate salts and hash the password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // > Create the user in the DB
      User.create({ email, password: hashedPassword , picture , name, description , pets: null})
        .then(newUserObj => {
          res.redirect('/');
        })
        .catch(err => {
          res.render('prelogin-views/signup', {
            errorMessage: 'Error while creating new username.',
          });
        });

      // > Once the user is cretaed , redirect to home
    })
    .catch(err => console.log(err));
});

// POST 'auth/login'
router.post('/login', (req, res, next) => {
  // Deconstruct the password and the user
  const { email , password: enteredPassword } = req.body;

  // Check if username or password are empty strings
  if (email === '' || enteredPassword === '') {
    res.render('prelogin-views/login', {
      errorMessage: 'Provide username and password',
    });
    return;
  }

  // Find the user by username
  User.findOne({ email })
    .then(userData => {
      // If - username doesn't exist - return error
      //console.log(req.session);
      //console.log(userData)
      
      if (!userData) {
        res.render('prelogin-views/login', { errorMessage: 'Username not found!' });
        return;
      }

      // If username exists - check if the password is correct
      const hashedPasswordFromDB = userData.password; // Hashed password saved in DB during signup

      const passwordCorrect = bcrypt.compareSync(
        enteredPassword,
        hashedPasswordFromDB,
      );

      // If password is correct - create session (& cookie) and redirect

      if (passwordCorrect) {
        // Save the login in the session ( and create cookie )
        // And redirect the user
        req.session.currentUser = userData;
        res.redirect('../postlogin-views/homepage');
      }

      // Else - if password incorrect - return error
    })
    .catch(err => console.log(err)); 
});

module.exports = router;
