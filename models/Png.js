const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pngSchema = new Schema ({
  title: String,
  description: String,
  image_url: String
})

const Png = mongoose.model('Png', pngSchema)

module.exports = Png;