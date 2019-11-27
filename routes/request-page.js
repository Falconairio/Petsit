var express = require('express');
var router = express.Router();
const Pet = require('./../models/Pet');
const Request = require('./../models/Request')



router.get('/:type', (req, res, next) => {
  Request.find({}).populate('pet')
  .then( (data) => console.log(data))
  .catch( (err) => console.log(err));
})


router.get('/', (req, res, next) => {
  Request.findById(req.query.id).populate('pet')
    .then((result) => {
      console.log(result);
      Pet.findById(result.pet)
      .then( (data) => {
        res.render('postlogin-views/request-page', {title: 'Request', request: result, pet: data});
      })
      .catch( (err) => console.log(err));
    }).catch((err) => {
      console.log(err);
    })
  
});



module.exports = router;
 