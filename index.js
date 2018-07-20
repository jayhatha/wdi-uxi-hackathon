require('dotenv').config();
var express = require('express');
var bp = require('body-parser');
var request = require('request');
var ejsLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var db = require('./models');
var rowdy = require('rowdy-logger');

var app = express();
app.set('view engine', 'ejs');

var rowdyResults = rowdy.begin(app);

app.use (express.static(__dirname + '/static'));
app.use(bp.urlencoded({ extended: false }));
app.use(ejsLayouts);

// this needs to come before you app.use passport!
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// attaches current user to res for all routes, also attaches flash messages
app.use(function(req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// GET / - main index of site

  app.get('/', function(req, res) {
          res.render('index');
        });

// GET / - ask page

  app.get('/ask', function(req, res) {
          res.render('ask');
        });

// GET / - offer page

  app.get('/offer', function(req, res) {
          res.render('offer');
        });

app.use('/auth', require('./controllers/auth'));

var server = app.listen(process.env.PORT || 3000, function() {
    rowdyResults.print()
})

  module.exports = server;
