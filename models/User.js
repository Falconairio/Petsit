const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    pictureUrl: {type: String},
    name: {type: String, required: true},
    description: {type: String},
    pets: {type: Schema.Types.ObjectId, ref: 'Pet'}, 
    requests: {type: Schema.Types.ObjectId, ref: 'Request'}
});

const User = mongoose.model('User', userSchema);

module.exports = User;

