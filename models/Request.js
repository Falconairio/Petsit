const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    requesterName: {type: String, required: true},
    requestTitle: {type: String, required: true},
    requestDesc: {type: String, required: true},
    pet: {type: Schema.Types.ObjectId, ref: 'Request', required: true},
    requestDate: {type: Date, default: Date.now()},
    requestFulfilled: {type: Boolean}
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;

