const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    pictureUrl: {type: String},
    name: {type: String, required: true},
    age: {type: Number, min: 18, required: true},
    description: {type: String},
    location: {type: String},
    pets: {type: Schema.Types.ObjectId, ref: 'Pet'}, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;

