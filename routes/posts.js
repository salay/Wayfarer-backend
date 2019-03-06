const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

router.get('/', controllers.posts.index)
router.post('/',controllers.posts.newpost)
router.delete('/',controllers.posts.deletePost)
router.put('/',controllers.posts.updatePost)

//router.post('/posts', controllers.posts.posts);
//delte
//put

module.exports = router;