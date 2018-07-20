require('dotenv').config();
var express = require('express');
var bp = require('body-parser');
var request = require('request');
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
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


// attaches current user to res for all routes, also attaches flash messages
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

// GET / - main index of site

  app.get('/', function(req, res) {
  res.render('index');
   });

  app.get('/map', function(req, res) {
  res.render('map');
  });
// GET / - ask page

  app.get('/ask', function(req, res) {
          res.render('ask');
        });

// GET / - offer page

  app.get('/offer', function(req, res) {
          res.render('offer');
        });

// GET / - offer page

  app.get('/signup', function(req, res) {
          res.render('signup');
        });

// GET / - offer page

  app.get('/login', function(req, res) {
          res.render('login');
        });

// GET / - profile page

  app.get('/profile', function(req, res) {
          res.render('profile');
        });

// GET / - edit account

  app.get('/account', function(req, res) {
          res.render('account');
        });

// GET / - profile two

  app.get('/profiletwo', function(req, res) {
          res.render('profiletwo');
        });

// GET / - profile two

  app.get('/profilethree', function(req, res) {
          res.render('profilethree');
        });



  app.get('/results', function(req, res) {
          res.render('results');
        });

var server = app.listen(process.env.PORT || 3000, function() {
    rowdyResults.print()
})

  module.exports = server;
