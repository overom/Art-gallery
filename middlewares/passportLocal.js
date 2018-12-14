const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const db = require('../models/index');

module.exports = passport.use(
  new LocalStrategy(
    {
      usernameField: 'name',
      passwordField: 'password',
      passReqToCallback: true,
    },
    (req, name, password, done) => {
      const generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

      generateHash(password);
      db.User.findOne({
        where: {
          name: name,
        },
      })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'password invalid...' });
          } else {
            bcrypt.compare(password, user.password, (err, res) => {
              if (!res) {
                return done(null, false, { message: 'password invalid...' });
              } else {
                return done(null, user);
              }
            });
          }
        })
        .catch(err => {
          return done(err, false);
        });
    }
  )
);
