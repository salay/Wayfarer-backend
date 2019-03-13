const 
      express = require('express'),
      app = express(),
      router = express.Router(),
      jwt = require('jsonwebtoken'),
      controllers = require('../controllers')
    // route that allows a NEW USER to sign up 
    router.post('/signup', controllers.user.signup);

    // route that allows a USER TO login 
    router.post('/login', controllers.user.login);

    // route that allows a USER to update their profile data
    router.put('/update', controllers.user.updateUser);

    // route that retrieves ALL USERS IN THE DB
    router.get('/all', controllers.user.all);

    // route that gets a SPECIFIC USER based on their ID 
    router.get('/:userId', controllers.user.thisUser);

    // route that DELETES a USER from the DB
    router.delete('/deleteUser', controllers.user.deleteUser);
    // router.get('/:userId/post',controllers.user.userPost)

    //this is a token check? I think
    router.use((req, res, next) => {
      console.log('activated')
      const bearerHeader = req.headers['authorization'];
      console.log('triggered token check', bearerHeader)

      if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        let verified = jwt.verify(req.token, 'waffles');
        console.log('here is the verified', verified)
        req.userId = verified._id //set user id for routes to use
        next();
      } 
      else {
        res.sendStatus(403);
      }
    })


    router.get('/', controllers.user.show)



    module.exports = router; 