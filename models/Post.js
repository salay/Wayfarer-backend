const mongoose = require('mongoose');
Schema = mongoose.Schema

const PostSchema = new mongoose.Schema({
    title: String,
    //how to specifically reference the city & country in the city schema
    //this comes from the dropdown
    //location: [CitySchema.schema],
    location: {
        type: Schema.Types.String,
        ref: 'City'
    },
    text: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Post', PostSchema)