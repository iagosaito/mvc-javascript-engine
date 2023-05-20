const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel')

router.get('/', (req, res) => {

  userModel.getAllUsers((users) => {
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