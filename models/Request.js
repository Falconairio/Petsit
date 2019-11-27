const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    requesterName: {type: String},
    requestTitle: {type: String},
    requestDesc: {type: String},
    pet: {type: Schema.Types.ObjectId, ref: 'Pet'},
    requestDate: {type: Date, default: Date.now()},
    requestFulfilled: {type: Boolean}
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;

