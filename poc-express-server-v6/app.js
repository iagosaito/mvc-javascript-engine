const express = require('express')
const bodyParser = require('body-parser'); //to require the package
const app = express()
const port = 3000

const path = require('path');

app.set('views', './views'); // https://expressjs.com/en/advanced/developing-template-engines.html
app.set('view engine', 'pug'); // https://expressjs.com/en/guide/using-template-engines.html

app.use(express.static(path.join(__dirname, 'public'))); // https://expressjs.com/en/starter/static-files.html
app.use(bodyParser.urlencoded({extended: true}));

const userController = require('./controller/userController')

app.get('/', userController);
app.get('/users', userController);
app.get('/users/:id', userController)
app.post('/users', userController)

app.listen(port, () => {
    console.log('Servidor rodando')
});

