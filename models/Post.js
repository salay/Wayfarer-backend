const mongoose = require('mongoose');
// const UserSchema = require('./User');

const PostSchema = new mongoose.Schema({
    title: String,
    //how to specifically reference the city & country in the city schema
    //this comes from the dropdown
    //location: [CitySchema.schema],
    location: String,
    text: String,
    image: String,
    // user: [UserSchema.schema]
})

module.exports = mongoose.model('Post', PostSchema)