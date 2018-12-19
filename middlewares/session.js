module.exports = sess = {
  secret: process.env.SESSION_SECRET_KEY,
  saveUninitialized: true,
  resave: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 },
};
