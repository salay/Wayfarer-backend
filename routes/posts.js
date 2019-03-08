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

// route that CREATES a NEW POST for a unique USER
router.post('/:userId/newPost',controllers.posts.newUserPost);

// route that gets all POSTS associated with a USER
router.get('/:userId/allPosts',controllers.posts.allUserPosts);

// GETS a SINGLE POST
router.get('/:postId/',controllers.posts.singlePost);

module.exports = router;
