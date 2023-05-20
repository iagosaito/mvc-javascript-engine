const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    const dataFilePath = path.join(__dirname, '../stupid_database/users.json');
  
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

  router.get('/users', (req, res) => {
    res.render('users')
  })

  module.exports = router;