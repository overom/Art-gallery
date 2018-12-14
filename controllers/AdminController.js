const db = require(`../models/index.js`);
const bcrypt = require('bcrypt-nodejs');
const store = require('store');

class AdminController {
  admin(req, res) {
    req.flash(
      'info',
      'Attention : Vous devez être un administrateur du site pour pouvoir vous connectez'
    );
    res.render('admin/login');
  }
  logout(req, res) {
    req.logout();
    store.clearAll();
    res.redirect('/admin');
  }

  home(req, res) {
    const user = req.user;
    req.flash('info', `Bonjour ${user.name} vous êtes connecter sur le Back-office`);
    res.render('admin/home'), { user };
  }

  commandes(req, res) {
    res.render('commandes/liste');
  }

  creercompte(req, res) {
    res.render('admin/creercompte');
  }

  enregistrer(req, res) {
    if (req.method === 'POST') {
      bcrypt.hash(req.body.password, null, null, (err, hash) => {
        db.User.create({
          ...req.body,
          ...{ admin: true, googleClient: false, password: hash },
        }).then(user => res.redirect('/admin'));
      });
    }
  }
  //User
  users(req, res) {
    res.render('users/liste');
  }

  //Dashboard
  dashboard(req, res) {
    res.render('dashboard/accueil');
  }

  //Oeuvres
  oeuvres(req, res) {
    db.Oeuvre.findAll().then(oeuvres => {
      res.render('oeuvres/liste', { oeuvres });
    });
  }
  ajouter(req, res) {
    res.render('oeuvres/creer');
  }
  creerOeuvre(req, res) {
    const data = req.body;
    const { picture } = req.files;
    if (picture) {
      picture.mv(`public/uploads/${picture.name}`, () => {
        data.picture = picture.name;
        req.flash('success', `Oeuvre ${req.body.name} ajouté avec succès`);
        return db.Oeuvre.create(data).then(oeuvre => res.redirect('/admin/home'));
      });
    } else {
      req.flash('info', 'Chaque oeuvre doit avoir une image');
      res.redirect('/admin/oeuvres');
    }
  }
  modifierOeuvre(req, res) {
    db.Oeuvre.findById(req.params.id).then(oeuvre => res.render('oeuvres/modifier', { oeuvre }));
  }
  saveModificationOeuvre(req, res) {
    db.Oeuvre.findById(req.params.id).then(oeuvre => {
      oeuvre.update(req.body).then(() => res.redirect('/admin/oeuvres'));
    });
  }

  supprimeroeuvre(req, res) {
    db.Oeuvre.findById(req.params.id).then(oeuvre =>
      oeuvre.destroy().then(() => res.redirect('/admin/oeuvres'))
    );
  }
}
module.exports = AdminController;
