const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie')?.trim()?.split('=')[1] === 'true';

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: req.session?.isLoggedIn ?? false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};
