var express = require('express');
var router = express.Router();
const logoutRouter = require('./logout');
const profileRouter = require('./profile')
const petRouter = require('./add-pet');
const authRouter = require('./auth');
const editRouter = require('./edit')
const userReqRouter = require('./user-requests')

router.use('/logout', logoutRouter);
router.use('/auth',authRouter)
router.use('/profile', profileRouter);
router.use('/add-pet', petRouter);
router.use('/edit',editRouter);
router.use('/user-requests', userReqRouter);

router.get('/home', function(req, res, next) {
  res.render('postlogin-views/homepage', {title: 'Welcome to Petsit'});
});

module.exports = router;