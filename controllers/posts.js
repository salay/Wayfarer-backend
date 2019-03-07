const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{ // finding all the POSTS in the DB
        db.Post.find({}, (err,posts)=>{
            res.json(posts)
        })
    },

    onePost: (req,res)=>{ 
        const postID = req.params.postId
        db.Post.findById({_id: postID}, (err,foundPost)=>{
            console.log(foundPost)
            console.log(postID)
            res.json(foundPost)
        })
    },

    // newpost : (req,res) => {
    //     console.log(req.body)
    // db.Post.create({
    //     title: req.body.title,
    //     location: req.body.location ,
    //     text:req.body.text,
    // },(err, newPost) => {
    //     if (err){
    //         console.log(err)
    //         res.send(err)
    //     }
    //     console.log('here is the result',newPost)
    //     res.json(newPost)
    // }) 
    // },

    // deleting a user's POST
    deletePost: (req,res) => {
        db.Post.findOneAndDelete({_id: req.body._id}, (err,deletedPost)=>{
          res.json(deletedPost)
      })
    },
        //  finding POST for that particular user and updating that post POST
    updatePost: (req, res) => {
        db.Post.findOneAndUpdate({ _id: req.body._id}, req.body, {new: true})
          .exec((err, updatedPost)=> {
            res.json(updatedPost);
        });
    }, 
        // finding an id by a particular user and creating a new post for that user
    newUserPost: (req,res) => {
    let userId = req.params.userId // userID is refering to a particular user ID which is defined in the post routes. if that ID matches a user ID in the database, user is found
      db.User.findOne({_id: userId}, (err,foundUser) => {
          if (err) return console.log(err);
          let newPost = new db.Post({ // creating a new POST from the found user 
            title: req.body.title,
            location: req.body.location,
            text: req.body.text
          });
          
          foundUser.posts.push(newPost); // pushing the new post into the unique user's posts array
      
          foundUser.save((err, newPost) => { // saving to the db
            if (err) return console.log(err);
            res.json(newPost) // returning as JSON
          });
        })
      },

      allUserPosts: (req,res) => {
          let userId = req.params.userId
          db.User.findById({_id: userId}, (err,foundUser) =>{
              if(err) return console.log(err);
              res.json(foundUser.posts);
            })
          }
    
}