const 
    posts = require('./posts'),
    cities = require('./cities'),
    db = require('../models')


db.Post.remove({})
    .then(() => {
        db.Post.collection.insert(posts)
            .then(seededEntries => {
                console.log(seededEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })
    

db.City.remove({})
    .then(() => {
        db.City.collection.insert(cities)
            .then(seededEntries => {
                console.log(seededEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })