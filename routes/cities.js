const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

router.get('/', controllers.cities.index);
// router.post('/', controllers.posts.create);

module.exports = router;