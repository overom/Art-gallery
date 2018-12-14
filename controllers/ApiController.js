const db = require(`../models/index.js`);
const path = require('path');

class ApiController {
  oeuvres(req, res) {
    db.Oeuvre.findAll().then(oeuvre => res.json(oeuvre));
  }
  sendFile(req, res) {
    console.log('====================================');
    console.log(req.params.name);
    console.log('====================================');
    res.sendFile(path.resolve('public') + `/uploads/${req.params.name}`);
  }
  currentUser(req, res) {
    res.send(req.user);
  }
  logout(req, res) {
    req.logout();
    res.redirect('http://localhost:3000');
  }
}
module.exports = ApiController;
