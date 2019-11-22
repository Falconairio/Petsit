const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {Type: String, required: true},
    age: {Type: Number, min: 18, required: true},
    petPictureUrl: {Type: String, required: true},
    description: {Type: String},
    breed: {Type: String},
    petType: {Type: String, required: true, enum: ['Dog','Cat','Bird','Fish','Rabbit','Reptile']},
    request: {Type: Schema.Types.ObjectId, ref: 'User'},
    visible: {type: Boolean, value: true},
    dietaryReq: {type: String}
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;

