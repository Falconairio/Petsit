const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    requesterName: {Type: String, required: true},
    requestTitle: {Type: String, required: true},
    requestDesc: {Type: String, required: true},
    pet: {Type: Schema.Types.ObjectId, ref: 'Request', required: true},
    requestDate: {Type: Date, default: Date.now()}
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;

