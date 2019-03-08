    db = require('../models');

    module.exports = {
        index: (req,res)=>{
            db.City.find({}, (err,cities)=>{
                res.json(cities)
            })
        },

        findCity: (req,res) => {
            const locationName = req.params.locationName
            db.Post.find({location:locationName}, (err,foundCity)=>{
                console.log(foundCity)
                res.json(foundCity)
            })
        }
    }