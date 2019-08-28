const express = require('express')
require('express-group-routes')
const multer = require("./middlewares/multer");
const {authenticated} = require("./middlewares/auth")
const bodyParser = require('body-parser')


const kost = require('./controllers/KostControllers')
const user = require('./controllers/UserControllers')
const app = express()


app.use(multer);
app.use(bodyParser.json())
app.use('/api/v1/images', express.static('images'))

app.group('/api/v1/', router =>{
    router.get('/kosts', kost.index);
    router.post('/kosts', authenticated ,kost.store)
    router.get('/kosts/:id', kost.show)

    router.post('/register', user.register)
    router.post('/login', user.login)

})

app.get('/', (req, res) => {
    res.send('Hello');
});



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});