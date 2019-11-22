const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {Type: String, required: true},
    password: {Type: String, required: true},
    userId: {Type: Schema.Types.ObjectId, ref: 'User'},
    pictureUrl: {Type: String, required: true},
    name: {Type: String, required: true},
    age: {Type: Number, min: 18, required: true},
    description: {Type: String},
    location: {Type: String, required: true},
    pets: {Type: Schema.Types.ObjectId, ref: 'Pet'},
});

const User = mongoose.model('User', userSchema);

module.exports = User;

