db = require('../models');

module.exports = {
    index: (req,res)=>{
        db.City.find({}, (err,cities)=>{
           
            res.json(cities)
        })
    },

    findCity: (req,res) => {
        const city = req.params.location
        db.Post.find({location:city}, (err,foundCity)=>{
            if(err) return console.log(err)
            console.log(foundCity)
            res.json(foundCity)
        })
    }
}