const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

router.get('/', controllers.posts.index);
// router.post('/', controllers.posts.postCreation);

module.exports = router;