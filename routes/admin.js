const express = require('express');
const router = express.Router();
const passport = require('passport');
const loggedInAdmin = require('../middlewares/loggedInAdmin');
const AdminController = require('../controllers/AdminController');
const controller = new AdminController();

// Connexion
router.get('/', (req, res) => controller.admin(req, res));
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/admin/home',
    failureRedirect: '/admin',
    failureFlash: true,
    successFlash: true,
  })
);
router.get('/logout', (req, res) => controller.logout(req, res));
router.all('/*', loggedInAdmin, (req, res, next) => {
  console.log('secure route');
  next();
});
router.get('/home', (req, res) => controller.home(req, res));
router.get('/dashboard', (req, res) => controller.dashboard(req, res));
router.get('/oeuvres', (req, res) => controller.oeuvres(req, res));
router.get('/users', (req, res) => controller.users(req, res));
router.get('/commandes', (req, res) => controller.commandes(req, res));

//Oeuvres
router.get('/oeuvres/ajouter', (req, res) => controller.ajouter(req, res));
router.post('/oeuvres/creer', (req, res) => controller.creerOeuvre(req, res));
router.get('/oeuvres/modifier/:id', (req, res) => controller.modifierOeuvre(req, res));
router.post('/oeuvres/modification/:id', (req, res) => controller.saveModificationOeuvre(req, res));
router.get('/oeuvres/supprimeroeuvre/:id', (req, res) => controller.supprimeroeuvre(req, res));

// A Supprimer CREATION DE COMPTE ADMIN
router.get('/creercompte', (req, res) => controller.creercompte(req, res));
router.post('/enregistrer', (req, res) => controller.enregistrer(req, res));

module.exports = router;
