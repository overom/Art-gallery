const db = require(`../models/index.js`);
const path = require('path');

class UserController {
  login(req, res) {
    res.send('user');
  }
}
module.exports = UserController;
