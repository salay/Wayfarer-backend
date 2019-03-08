db = require('../models');

module.exports = {
    // index: (req,res)=>{
    //     db.City.find({}, (err,cities)=>{
    //         res.json(cities)
    //     })
    // },

    findCity: (req,res) => {
        const locationName = req.params.locationName
        db.Post.find({location:locationName}, (err,foundCity)=>{

            // if(err) return console.log(err)
            // if (locationName == foundUser[3].posts[0].location) {
            // console.log(foundUser)
            // res.json(foundUser[3].posts) }
            // else (console.log("Wrong City"))
            console.log(foundCity)
            res.json(foundCity)
        })
    }
}