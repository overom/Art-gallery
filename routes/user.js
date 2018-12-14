const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const controller = new UserController();

router.get('/signup', (req, res) => controller.login(req, res));

module.exports = router;
