const 
  bcrypt = require('bcrypt'),
  db = require('../models'),
  jwt = require('jsonwebtoken')
  var date = new Date().toLocaleDateString();

  
  module.exports = {
    show: (req,res)=>{
      console.log('trigger Show', req.userId)
      if(req.userId){
        db.User.findById(req.userId, (err, foundUser)=>{
          res.json(foundUser)
        })
      } else {
        res.json('No user Id provided')
      }
    },
    //this is the start of the next key value pair

    signup : (req, res) => {
      console.log('in signup')
      console.log(req.body);
      // Check to see if email is already in db
      db.User.find({email: req.body.email})
      //.exec() will call the callback
        .exec()
        //this is error first handling - for signup you don't want a user to already exist
        .then( user => {
          // if a user is found with that email
          if (user.length >= 1) {
            // send an error and let the user know that the email already exists
            return res.status(409).json({
              message: "email already exists"
            })
          // if we don't have this user's email in our db, lets get them set up!
          } else {
            // lets hash our plaintext password
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              if(err){ 
                console.log("hashing error:", err);
                res.status(200).json({error: err})
              // we now have a successful hashed password
              } else {
                // we are creating a User object with their email address and OUR hashed password
                db.User.create({
                  email: req.body.email,
                  password: hash,
                  fullname:req.body.fullname,
                  username: req.body.username,
                  currentcity:req.body.currentcity,
                  joinDate:  req.body.joinDate,
                }, (err, newUser) => {
                    console.log('here is the result',newUser)
                  // if(err){ return res.status(500).json({err})}
                  // we send our new data back to user or whatever you want to do.
                  let user ={
                    username: newUser.username,
                    email: newUser.email,
                    fullname: newUser.fullname,
                    currentcity: newUser.currentcity,
                    joinDate: newUser.joinDate,
                    _id: newUser._id
                  } 
                  
                jwt.sign(
                    user,
                    "waffles",
                    {
                      // its good practice to have an expiration amount for jwt tokens.
                      expiresIn: "1h"
                    },
                    (err, signedJwt) => {
                    res.status(200).json({
                      message: 'User Created',
                      user,
                      signedJwt
                    })
                  });
                  // send success back to user, along with a token.
                })
              }
            })
          }
        })
        .catch( err => {
          console.log(err);
          res.status(500).json({err})
        })
    },

    login: (req, res) => {
      console.log("LOGIN CALLED");
      // find the user in our user db
      console.log("body", req.body)
      db.User.find({email: req.body.email})
        .select('+password')
        .exec()
        // if we have found a user
        .then( users => {
          // if there is not email in our db
          console.log("USERS: ", users);
          if(users.length < 1) {
            return res.status(401).json({
              message: "Email/Password incorrect"
            })
          }
          // we have an email in our db that matches what they gave us
          // now we have to compare their hashed password to what we have in our db
          console.log("body", req.body);
          console.log("hash", users[0].password);
          bcrypt.compare(req.body.password, users[0].password, (err, match) => {
            console.log(match)
            // If the compare function breaks, let them know
            if(err){console.log(err);return res.status(500).json({err})}
            // If match is true (their password matches our db password)
            if(match){
              console.log("MATCH: ", match)
              // create a json web token

              let user ={
                email: users[0].email,
                _id: users[0]._id,
                fullname: users[0].fullname,
                username: users[0].username,
                currentcity: users[0].currentcity,
              } 
              jwt.sign(
                user,
                "waffles",
                {
                  // its good practice to have an expiration amount for jwt tokens.
                  expiresIn: "1h"
                },
                (err, signedJwt) => {
                res.status(200).json({
                  message: 'Auth successful',
                  user,
                  signedJwt
                })
              });
            // the password provided does not match the password on file.
            } else {
              console.log("NOT A MATCH")
              res.status(401).json({message: "Email/Password incorrect"})
            }
          })
        })
        .catch( err => {
          console.log("OUTSIDE ERROR_")
          console.log(err);
          res.status(500).json({err})
        })
      },
    updateUser : (req,res) => {
      const userId = req.body._id;
        db.User.findOneAndUpdate(
          {_id: userId},
          req.body,
          { new: true},
          (err, updatedUser) => {
            if(err) {throw err; }
            res.json(updatedUser);
        });
    },
    all: (req,res) => {
      db.User.find({}).populate('Posts').exec((err, allUser) => {
        // add some error catching
        res.json(allUser)
      })
    },
    thisUser: (req,res) => {
      let userId = req.params.userId
      db.User.findById({_id: userId}, (err,foundUser) =>{
        res.json(foundUser)
      })
    },
    deleteUser: (req,res) => {
      db.User.findOneAndDelete({email: req.body.email}, (err,deletedUser)=>{
        res.json(deletedUser)
    })
    },

}