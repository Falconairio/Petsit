const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    petPictureUrl: {type: String, required: true},
    description: {type: String},
    breed: {type: String},
    petType: {type: String},
    request: {type: Schema.Types.ObjectId, ref: 'User'},
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;

