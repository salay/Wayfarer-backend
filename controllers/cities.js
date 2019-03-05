db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.City.find({}, (err,cities)=>{
           
            res.json(cities)
        })
    },
}