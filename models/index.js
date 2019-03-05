const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/backend',
  { useNewUrlParser: true })

module.exports= {
    Post: require('./Post'),
    City: require('./City')
}
