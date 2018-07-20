module.exports = function(req, res, next){
  if (!req.user) {
    req.flash('error', 'You must be logged in to access that page.');
    req.session.returnTo = req.path;
    res.redirect('/auth/login');
    next();
  } else {
    next();
  }
}
