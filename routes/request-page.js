var express = require('express');
var router = express.Router();
const Pet = require('./../models/Pet');
const Request = require('./../models/Request')



router.get('/:type', (req, res, next) => {
  Request.find({}).populate('pet')
  .then( (allRequest) => {
    allRequest.forEach(request =>{
      if(request.pet.petType === req.params.type){
        console.log('heloooooooooo',request);
        requestFiltered.push(request)
      }
    })
    return requestFiltered
  })
  .then(requestFiltered =>{
    console.log('sdfghjk', requestFiltered);
    res.render( '/postlogin-views/homepage', {title: 'Welcome to Petsit' , requestList: requestFiltered})
  })
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
 