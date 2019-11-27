var express = require('express');
var router = express.Router();
const Request = require('./../models/Request')
const logoutRouter = require('./logout');
const profileRouter = require('./profile')
const petRouter = require('./add-pet');
const authRouter = require('./auth');
const editRouter = require('./edit')
const userReqRouter = require('./user-requests')
const reqPageRouter = require('./request-page')

router.use('/logout', logoutRouter);
router.use('/auth',authRouter)
router.use('/profile', profileRouter);
router.use('/add-pet', petRouter);
router.use('/edit',editRouter);
router.use('/user-requests', userReqRouter);
router.use('/request-page', reqPageRouter)

router.get('/home', function(req, res, next) {
  Request.find({}).populate('pet')
  .then( (requests) => {
    console.log(requests);
    res.render('postlogin-views/homepage', {title: 'Welcome to Petsit', requestList: requests});
  })
  .catch( (err) => console.log(err));

});

module.exports = router;