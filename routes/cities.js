    const 
      express = require('express'),
      router = express.Router(),
      controllers = require('../controllers')


router.get('/', controllers.cities.index);
router.get('/:locationName', controllers.cities.findCity)
// router.post('/', controllers.posts.create);

    // Dynamically finds all POSTS with the matching location VALUE
    router.get('/:locationName', controllers.cities.findCity);
    
    module.exports = router;