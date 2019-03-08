const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/backend',
//   { useNewUrlParser: true })

mongoose.connect(process.env.MONGODB_URI  || 'mongodb://127.0.0.1/wayfarer-db', { useNewUrlParser: true });

module.exports= {
    Post: require('./Post'),
    City: require('./City'),
    User: require('./User')
}
