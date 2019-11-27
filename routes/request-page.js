var express = require('express');
var router = express.Router();
const Pet = require('./../models/Pet');
const Request = require('./../models/Request');

router.get('/', (req, res, next) => {
  console.log(req.query);
  Request.findById(req.query.id)
  .then( (data) => {
    Pet.findById(data.pet)
    .then( (petData) => {
      res.render('postlogin-views/request-page', {title: 'Request', request: data, pet: petData});
    })
    .catch( (err) => console.log(err));
  })
  .catch( (err) => console.log(err));
});

module.exports = router;
