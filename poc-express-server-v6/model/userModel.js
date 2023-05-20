const path = require('path');
const fs = require('fs');

function getAllUsers(callback) {

    const dataFilePath = path.join(__dirname, '../stupid_database/users.json');

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
        throw new Error('File cannot be found');
        } else {
        const users = JSON.parse(data);
        callback(users);
        }
    });
}

function getUserById(id, callback) {
    getAllUsers((users) => {
      const user = users.find((user) => user.id === id);
  
      if (user) {
        callback(null, user);
      } else {
        callback("User not found");
      }
    });
  }

module.exports = {
    getAllUsers,
    getUserById
}