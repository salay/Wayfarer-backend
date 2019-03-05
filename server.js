const 
    express = require('express'),
    // cors = require('cors'),
    postRoutes = require('./routes/posts'),
    cityRoutes = require('./routes/cities'),
    bodyParser = require('body-parser')


const app = express()

//app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use('/api/posts', postRoutes)
app.use('/api/cities', cityRoutes)

app.listen(process.env.PORT || 3000)
//app.listen(3001, () => console.log('Listening on port 3001 :)'))