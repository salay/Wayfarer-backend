const 
    express = require('express'),
    cors = require('cors'),
    postRoutes = require('./routes/posts'),
    cityRoutes = require('./routes/cities'),
    userRoutes = require('./routes/user'),
    bodyParser = require('body-parser')
    const app = express()

    // MiddleWare
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static('public'))

    app.use('/api/posts', postRoutes)
    app.use('/api/cities', cityRoutes)
    app.use('/users', userRoutes)

    app.listen(process.env.PORT || 3001)
    console.log("The Server is running!")
