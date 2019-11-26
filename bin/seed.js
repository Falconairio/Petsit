const mongoose = require('mongoose');
const User = require('./../models/User');
const Request = require('./../models/Request');
const Pet = require('./../models/Pet');

const dbName = 'petsit';

const users = [
    {
        email: 'johndoe@gmail.com',
        password: '123',
        pictureUrl: 'https://previews.123rf.com/images/kurhan/kurhan1112/kurhan111200244/11478367-happy-man-.jpg',
        name: 'John Doe',
        description: 'lorem ipsum',
        pets: null, 
    }
];

 /*const pets = [

]
 
 const requests = [

]*/

mongoose.connect('mongodb://localhost:27017/petsitTest', {useNewUrlParser : true})
.then( (data) => {
    return User.create(users);
})
.then((insertedDocuments) => {
    console.log('here are the inserted documents',insertedDocuments);
    mongoose.connection.close();
})
.catch( (err) => console.log(err));

/*mongoose.connect('mongodb://localhost:27017/petsitTest', {useNewUrlParser : true})
.then( (data) => {
    return Request.create(requests);
})
.then((insertedDocuments) => {
    console.log('here are the inserted documents',insertedDocuments);
    mongoose.connection.close();
})
.catch( (err) => console.log(err));

mongoose.connect('mongodb://localhost:27017/petsitTest', {useNewUrlParser : true})
.then( (data) => {
    return Pet.create(pets);
})
.then((insertedDocuments) => {
    console.log('here are the inserted documents',insertedDocuments);
    mongoose.connection.close();
})
.catch( (err) => console.log(err));*/