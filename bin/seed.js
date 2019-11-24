const mongoose = require('mongoose');
const User = require('./../models/User');
const Request = require('./../models/Request');
const Pet = require('./../models/Pet');

const dbName = 'petsit';

const Users = [
    
];

mongoose.connect('mongodb://localhost:27017/petsit', {useNewUrlParser : true})
.then( (data) => {
    return User.create(books);
})
.then((insertedDocuments) => {
    console.log('here are the inserted documents',insertedDocuments);
    mongoose.connection.close();
})
.catch( (err) => console.log(err));