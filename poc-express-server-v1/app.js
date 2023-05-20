const express = require('express')
const app = express()
const port = 3003

var path = require('path');

app.set('views', './views'); // https://expressjs.com/en/advanced/developing-template-engines.html
app.set('view engine', 'pug'); // https://expressjs.com/en/guide/using-template-engines.html

app.use(express.static(path.join(__dirname, 'public'))); // https://expressjs.com/en/starter/static-files.html

app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Usuários',
        mensagem: 'Listagem de Usuários'
    });
});

app.listen(port, () => {
    console.log('Servidor rodando')
});

