const express = require('express');
const router = express.Router();
const loggedInClient = require('../middlewares/loggedInClient');
const ApiController = require('../controllers/ApiController');
const controller = new ApiController();

router.get('/oeuvres', (req, res) => controller.oeuvres(req, res));
router.get('/pictures/:name', (req, res) => {
  controller.sendFile(req, res);
});

router.get('/current_user', (req, res) => controller.currentUser(req, res));

router.get('/logout', (req, res) => controller.logout(req, res));

module.exports = router;
