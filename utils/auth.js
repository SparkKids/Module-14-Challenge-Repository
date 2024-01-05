const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  console.log("In withAuth = (req, res, next)")
  if (!req.session.userId) {
    console.log("if (!req.session.userId) {")
    res.redirect('/login');
  } else {
    console.log("else (req.session.userId) {")
    next();
  }
};

module.exports = withAuth;
