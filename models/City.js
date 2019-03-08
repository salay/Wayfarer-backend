    const mongoose = require('mongoose');
  
    const CitySchema = new mongoose.Schema({
        city: String,
        country: String,
        image: String,
        posts:[{
            
        }]
    })

    module.exports = mongoose.model('City', CitySchema)
