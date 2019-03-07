const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

// router.get('/', controllers.cities.index);
router.get('/:userId/posts', controllers.cities.findCity)
// router.post('/', controllers.posts.create);

module.exports = router;