const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.Post.find({}, (err,posts)=>{
            res.json(posts)
        })
    },
    // postCreation: (req, res)=>{
    //     db.Post.create({ 

    //     }, (err, newCity)=>{
    //         res.json(newcity)
    //     })
    // },
}


//     posts : (req, res) => {
//     },
// 

