const express = require('express');
const router = express.Router();
const loggedInClient = require('../middlewares/loggedInClient');
const ApiController = require('../controllers/ApiController');
const controller = new ApiController();

router.get('/oeuvres', (req, res) => controller.oeuvres(req, res));
router.get('/pictures/:name', (req, res) => {
  controller.sendFile(req, res);
});

router.get('/oeuvre/:id', (req, res) => controller.details(req, res));

router.get('/current_user', (req, res) => controller.currentUser(req, res));

router.get('/logout', (req, res) => controller.logout(req, res));

router.post('/contact', (req, res) => controller.contact(req, res));

router.get('/personnages', (req, res) => controller.personnages(req, res));
router.get('/tableaux', (req, res) => controller.tableaux(req, res));
router.get('/hiboux', (req, res) => controller.hiboux(req, res));

module.exports = router;
