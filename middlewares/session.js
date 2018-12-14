module.exports = sess = {
  secret: process.env.SESSION_SECRET_KEY,
  saveUninitialized: true,
  resave: true,
  cookie: { maxAge: 100 * 60 * 60 * 24 * 30 },
};
