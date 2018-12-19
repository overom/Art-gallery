const db = require(`../models/index.js`);
const path = require('path');

class ApiController {
  oeuvres(req, res) {
    db.Oeuvre.findAll().then(oeuvre => res.json(oeuvre));
  }
  sendFile(req, res) {
    res.sendFile(path.resolve('public') + `/uploads/${req.params.name}`);
  }
  currentUser(req, res) {
    res.json(req.user);
  }
  logout(req, res) {
    req.logout();
    res.redirect('http://localhost:3000');
  }

  contact(req, res) {
    db.Message.create(req.body).then(res.send('Message envoyé'));
  }
}
module.exports = ApiController;
