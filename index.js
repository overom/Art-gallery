const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const colors = require('colors');
const passport = require('passport');
const morgan = require('morgan');
const session = require('express-session');
const flash = require('express-flash');
const fileUpload = require('express-fileupload');

const db = require(`./models/index.js`);
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Configuration of Session
 */
const sess = require('./middlewares/session');
if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
}
app.use(session(sess));

require('./middlewares/passportLocal');
require('./middlewares/passportGoogle');

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  db.User.findById(id).then(user => {
    if (user == null) {
      done(new Error('Wrong user id.'));
    }
    done(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

/**
 * Store in global variables
 */
app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.user = req.user;
  next();
});

app.use(flash());

// Routes
const admin = require('./routes/admin');
const api = require('./routes/api');
const user = require('./routes/user');
const auth = require('./routes/auth');
app.use('/admin', admin);
app.use('/api', api);
app.use('/user', user);
app.use('/auth', auth);

// Handle 404
app.use((req, res) => {
  res.status(404);
  res.render('errors/404');
});
// Handle 500
app.use((error, req, res, next) => {
  res.status(500);
  console.error(colors.bold.red.underline(error.stack));
  res.render('errors/500', {
    message: error.message,
    stack: error.stack,
    error: error,
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log('server on port', PORT);
});
