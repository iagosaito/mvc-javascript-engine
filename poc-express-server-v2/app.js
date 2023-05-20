const express = require('express')
const app = express()
const port = 3003
const fs = require('fs');
const path = require('path');

app.set('views', './views'); // https://expressjs.com/en/advanced/developing-template-engines.html
app.set('view engine', 'pug'); // https://expressjs.com/en/guide/using-template-engines.html

app.use(express.static(path.join(__dirname, 'public'))); // https://expressjs.com/en/starter/static-files.html

app.get('/', (req, res) => {
    const dataFilePath = path.join(__dirname, './stupid_database/users.json');
  
    fs.readFile(dataFilePath, 'utf-8', (err, data) => {
      if (err) {
        // Handle the error if reading or parsing the file fails
        console.error(err);
        // Send an error response to the client if desired
        res.status(500).send('Internal Server Error');
        return;
      }
  
      const users = JSON.parse(data);

      console.log(users)
  
      res.render('index', {
        "titulo": 'Usuários',
        "mensagem": 'Listagem de Usuários',
        "users": users
      });
    });
  });
app.get('/users', (req, res) => {
    res.render('users');
});

app.listen(port, () => {
    console.log('Servidor rodando')
});

