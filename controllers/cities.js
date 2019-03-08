    db = require('../models');

<<<<<<< HEAD
module.exports = {
    index: (req,res)=>{
        db.City.find({}, (err,cities)=>{
            res.json(cities)
        })
    },
=======
    module.exports = {
        index: (req,res)=>{
            db.City.find({}, (err,cities)=>{
                res.json(cities)
            })
        },
>>>>>>> fb4c91d88adc1f755e5aa7ffdc0b6bd94331a6c8

        findCity: (req,res) => {
            const locationName = req.params.locationName
            db.Post.find({location:locationName}, (err,foundCity)=>{
                console.log(foundCity)
                res.json(foundCity)
            })
        }
    }