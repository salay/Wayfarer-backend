const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: String,
    country: String,
    image: String,
    posts: String
})

module.exports = mongoose.model('City', CitySchema)