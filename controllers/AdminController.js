const db = require(`../models/index.js`);
const bcrypt = require('bcrypt-nodejs');
const store = require('store');
const moment = require('moment');
require('moment/locale/fr');
const messageCreationDate = require('../lib/parseDate');

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
        db.Admin.create({
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
    const now = moment()
      .format('LLL')
      .split(' ');

    async function data() {
      const messagesOfTheDay = await db.Message.findAll().then(messages => {
        return messages.filter(message => {
          return (
            message.date.split(' ')[0] === now[0] &&
            message.date.split(' ')[1] === now[1] &&
            message.date.split(' ')[2] === now[2]
          );
        });
      });
      const unreadMessages = await db.Message.findAll().then(messages => {
        return messages.filter(message => {
          return !message.state;
        });
      });
      const newOeuvres = await db.Oeuvre.findAll().then(oeuvres => {
        return oeuvres.filter(oeuvre => {
          return (
            moment(oeuvre.createdAt)
              .format('LLL')
              .split(' ')[0] === now[0] &&
            moment(oeuvre.createdAt)
              .format('LLL')
              .split(' ')[1] === now[1] &&
            moment(oeuvre.createdAt)
              .format('LLL')
              .split(' ')[2] === now[2]
          );
        });
      });
      const oeuvres = await db.Oeuvre.findAll().then(oeuvre => oeuvre);

      const oeuvreCategoryPersonnage = await db.Oeuvre.findAll({
        where: { category: 'Personnage' },
      }).then(oeuvre => oeuvre);

      const oeuvreCategoryTableaux = await db.Oeuvre.findAll({
        where: { category: 'tableau' },
      }).then(oeuvre => oeuvre);

      const oeuvreCategoryHiboux = await db.Oeuvre.findAll({
        where: { category: 'hiboux' },
      }).then(oeuvre => oeuvre);

      res.render('dashboard/accueil', {
        messagesOfTheDay,
        unreadMessages,
        newOeuvres,
        oeuvres,
        oeuvreCategoryPersonnage,
        oeuvreCategoryTableaux,
        oeuvreCategoryHiboux,
      });
    }
    data();
  }
  drawChart(req, res) {
    function cleanArray(array) {
      let i,
        j,
        len = array.length,
        out = [],
        obj = {};
      for (i = 0; i < len; i++) {
        obj[array[i]] = 0;
      }
      for (j in obj) {
        out.push(j);
      }
      return out;
    }
    db.Oeuvre.findAll().then(oeuvre => {
      const categoryArray = [];
      const category = oeuvre.map(oeuvre => oeuvre.category);
      const categoryAvailable = cleanArray(category);
      const categoryPersonnage = oeuvre.filter(oeuvre => oeuvre.category === 'personnage').length;
      const categoryTableaux = oeuvre.filter(oeuvre => oeuvre.category === 'tableau').length;
      const categoryHiboux = oeuvre.filter(oeuvre => oeuvre.category === 'hiboux').length;
      categoryArray.push(categoryPersonnage, categoryTableaux, categoryHiboux);
      const creationDate = oeuvre.map(oeuvre => moment(oeuvre.createdAt).format('LL'));

      res.json({ categoryAvailable, categoryArray, creationDate });
    });
  }

  //Oeuvres
  oeuvres(req, res) {
    db.Oeuvre.findAll().then(oeuvres => {
      oeuvres.reverse();

      res.render('oeuvres/liste', { oeuvres });
    });
  }
  ajouter(req, res) {
    res.render('oeuvres/creer');
  }
  creerOeuvre(req, res) {
    const data = req.body;
    const materials = data.materials
      .split(',')
      .map(material => material.trim())
      .join();
    data.materials = materials;

    const { picture } = req.files;

    if (picture) {
      picture.mv(`public/uploads/${picture.name}`, err => {
        if (err) return res.status(500).send(err);

        data.picture = picture.name;
        req.flash('success', `Oeuvre ${req.body.name} ajouté avec succès`);
        return db.Oeuvre.create(data).then(oeuvre => res.redirect('/admin/oeuvres'));
      });
    } else {
      req.flash('info', 'Chaque oeuvre doit avoir une image');
      res.redirect('/admin/oeuvres');
    }
  }
  modifierOeuvre(req, res) {
    db.Oeuvre.findByPk(req.params.id).then(oeuvre => res.render('oeuvres/modifier', { oeuvre }));
  }
  saveModificationOeuvre(req, res) {
    db.Oeuvre.findByPk(req.params.id).then(oeuvre => {
      oeuvre.update(req.body).then(() => res.redirect('/admin/oeuvres'));
    });
  }

  supprimeroeuvre(req, res) {
    db.Oeuvre.findByPk(req.params.id).then(oeuvre => {
      return oeuvre.destroy().then(() => res.redirect('/admin/oeuvres'));
    });
  }
  //Messages
  messages(req, res) {
    db.Message.findAll().then(messages => {
      messages.reverse();
      res.render('messages/liste', { messages });
    });
  }
  messageLu(req, res) {
    db.Message.findByPk(req.params.id).then(message => {
      message.state ^= 1;
      message.save();
      res.redirect('/admin/messages');
    });
  }
}
module.exports = AdminController;
