    const 
      express = require('express'),
      router = express.Router(),
      controllers = require('../controllers')

    // route that gets ALL the Cities
    router.get('/', controllers.cities.index);

    // Dynamically finds all POSTS with the matching location VALUE
    router.get('/:locationName', controllers.cities.findCity);
    
    module.exports = router;