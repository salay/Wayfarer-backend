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
      newUserPost: (req, res) => {
        let userId = req.userId
        console.log(userId)
        db.Post.create({
          title: req.body.title,
          location: req.body.location,
          text: req.body.text,
          user: userId
        }, (err, newPost) => {
          if (err) { throw err }
          // This line will need to change to match the token
          // userID is refering to a particular user ID which is defined in the post routes. if that ID matches a user ID in the database, user is found
          // let userId = req.params.userId;
          
          db.User.findById(req.params.userId, (err, foundUser) => {
            console.log("///// Before")
            console.log(newPost)
            // foundUser.posts.push(newPost); // pushing the new post into the unique user's posts array
            
            console.log("///// After")
            console.log(foundUser);
            
            foundUser.save((err, savedUser) => { // saving to the USER DB
              if (err) { throw err }
              res.json(savedUser);
            })
          })
        });
      },

        allUserPosts: (req,res) => {
            let userId = req.params.userId
            db.User.findById({_id: userId}, (err,foundUser) =>{
                if(err) return console.log(err);
                res.json(foundUser.posts);
              })
            },

            singlePost: (req, res) => {
              let postId = req.params.postId;
              db.Post.findById({_id: postId}, (err, singlePost)=> {
                if (err) {throw err };
                res.json(singlePost)
              });
            }
  }