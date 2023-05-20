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
});

router.get('/users/:id', (req, res) => {
  const userId = req.query.id;

  console.log("Finding user with ID: " + userId);

  userModel.getUserById(userId, (error, user) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while retrieving the user." });
    }

    if (!user) {
      throw new Error("User with id " + userId + " cannot be found");
    }

    res.json(user);
  });
});

module.exports = router;