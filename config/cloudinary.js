const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
var express = require('require')
 
cloudinary.config({
  cloud_name: 'frederic',
  api_key: '944929721675274',
  api_secret: '96t7y1SnA1RzhNJB0sfeefAQbY4'
  });

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'name folder',
  allowedFormats: ['jpg', 'png']
});
 
const parser = multer({ storage: storage });

module.exports = parser