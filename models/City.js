    const mongoose = require('mongoose');
  
    const CitySchema = new mongoose.Schema({
        city: String,
        country: String,
        image: String,
        posts:[{
            
        }]
    })

<<<<<<< HEAD

const CitySchema = new mongoose.Schema({
    name: String,
    country: String,
    image: String,
    posts:[{
        
    }]
})

module.exports = mongoose.model('City', CitySchema)
=======
    module.exports = mongoose.model('City', CitySchema)
>>>>>>> fb4c91d88adc1f755e5aa7ffdc0b6bd94331a6c8
