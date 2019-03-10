const 
express = require('express'),
router = express.Router(),
controllers = require('../controllers')
// route that GETS ALL the posts
router.get('/', controllers.posts.index);

// router.post('/',controllers.posts.newpost)

// route that deletes a SINGLE POST by ID
router.delete('/',controllers.posts.deletePost);

// Updates a POST
router.put('/',controllers.posts.updatePost);

// GETS a SINGLE POST
router.get('/:postId/',controllers.posts.singlePost);


router.use((req, res, next) => {
  console.log('activated')
  const bearerHeader = req.headers['authorization'];
  console.log('triggered token check', bearerHeader)
  
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    let verified = jwt.verify(req.token, 'waffles');
    console.log('here is the verified', verified)
    req.userId = verified._id //set user id for routes to use
    next();
  } 
  else {
    res.sendStatus(403);
  }
  })

// route that gets all POSTS associated with a USER
router.get('/:userId/allPosts',controllers.posts.allUserPosts);

// route that CREATES a NEW POST for a unique USER
router.post('/:userId/newPost',controllers.posts.newUserPost);

module.exports = router;
