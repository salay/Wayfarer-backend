const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

router.get('/', controllers.posts.index)
// router.post('/',controllers.posts.newpost)
router.delete('/',controllers.posts.deletePost)
router.put('/',controllers.posts.updatePost)
router.post('/:userId/newPost',controllers.posts.newUserPost)
router.get('/:userId/allPosts',controllers.posts.allUserPosts)

//router.post('/posts', controllers.posts.posts);
//delte
//put

module.exports = router;