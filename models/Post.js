const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    //how to specifically reference the city & country in the city schema
    //this comes from the dropdown
    //location: [CitySchema.schema],
    location: String,
    text: String
})

module.exports = mongoose.model('Post', PostSchema)