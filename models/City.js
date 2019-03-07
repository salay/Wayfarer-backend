const mongoose = require('mongoose');
// const PostSchema = require('./Post');


const CitySchema = new mongoose.Schema({
    city: String,
    country: String,
    image: String,
    // posts:[PostSchema.schema]
})

module.exports = mongoose.model('City', CitySchema)