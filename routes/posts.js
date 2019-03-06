const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

<<<<<<< HEAD
router.get('/', controllers.posts.index)
router.post('/',controllers.posts.newpost)
router.delete('/',controllers.posts.deletePost)
router.put('/',controllers.posts.updatePost)
=======
router.get('/', controllers.posts.index);
// router.post('/', controllers.posts.postCreation);
>>>>>>> df0ad9a34da28a232e163f655d383d14acd5a50b

//router.post('/posts', controllers.posts.posts);
//delte
//put

module.exports = router;