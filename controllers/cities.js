db = require('../models');

module.exports = {
    index: (req,res)=>{
        db.City.find({}, (err,cities)=>{
           
            res.json(cities)
        })
    },
    // create: (req, res) => {
    //     console.log(req);
    //     db.City.create({ }, (err, newCity) => {
    //         res.send(newCity)
    //     })
    // }
}