const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, min: 18, required: true},
    petPictureUrl: {type: String, required: true},
    description: {type: String},
    breed: {type: String},
    petType: {type: String},
    request: {type: Schema.Types.ObjectId, ref: 'User'},
    visible: {type: Boolean, value: true},
    dietaryReq: {type: String}
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;

