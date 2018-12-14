function loggedInClient(req, res, next) {
  if (req.user && !req.user.admin && req.user.googleClient) {
    next();
  } else {
    return res.redirect('/auth/google');
  }
}
module.exports = loggedInClient;
