const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.Post.find({}, (err,posts)=>{
            res.json(posts)
        })
    },
}