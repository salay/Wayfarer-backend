const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

// router.get('/', controllers.cities.index);
router.get('/:locationName', controllers.cities.findCity)
// router.post('/', controllers.posts.create);

module.exports = router;