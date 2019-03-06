const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.Post.find({}, (err,posts)=>{
            res.json(posts)
        })
    },





    newpost : (req,res) => {
        console.log(req.body)
    db.Post.create({
        title: req.body.title,
        location: req.body.location ,
        text:req.body.text,
    },(err, newPost) => {
        if (err){
            console.log(err)
            res.send(err)
        }
        console.log('here is the result',newPost)
        res.json(newPost)
    }) 
    },

    deletePost: (req,res) => {
        db.Post.findOneAndDelete({_id: req.body._id}, (err,deletedPost)=>{
          res.json(deletedPost)
      })
    },

    updatePost: (req, res) => {
        db.Post.findOneAndUpdate({ _id: req.body._id}, req.body, {new: true})
          .exec((err, updatedPost)=> {
            res.json(updatedPost);
        });



} 
}