const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

  // Route that finding all the POSTS in the DB
router.get('/', controllers.posts.index)
// Route that deletes a  single POST in the DB
router.delete('/',controllers.posts.deletePost)
router.put('/',controllers.posts.updatePost)
router.post('/:userId/newPost',controllers.posts.newUserPost)
router.get('/:userId/allPosts',controllers.posts.allUserPosts)


module.exports = router;