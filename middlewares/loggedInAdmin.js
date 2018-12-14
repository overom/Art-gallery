function loggedInAdmin(req, res, next) {
  if (req.user && req.user.admin && !req.user.googleClient) {
    next();
  } else {
    return res.redirect('/admin');
  }
}
module.exports = loggedInAdmin;
