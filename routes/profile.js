var express = require('express');
var router = express.Router();

router.get('/edit',(req,res,next) => {
  res.render('postlogin-views/edit', {title: 'Edit User Profile', user: req.session.currentUser})
})

router.get('/', (req, res, next) => {
    res.render('postlogin-views/profile', {title: 'User Profile', user: req.session.currentUser});
  });

module.exports = router;
