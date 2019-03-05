const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/backend',
//   { useNewUrlParser: true })

mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/wayfarer-db', { useNewUrlParser: true });

module.exports= {
    Post: require('./Post'),
    City: require('./City')
}
