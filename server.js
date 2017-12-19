"use strict";
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// auth packages
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const LocalStrategy = require('passport-local').Strategy;
//password hash
const bcrypt = require('bcrypt');
const saltRounds = 10;

const account = require('./models/accounts');
const chart = require('./models/charts');

const VIEWS = path.join(__dirname, '/dist');

mongoose.connect(process.env.MONGO_URI || 'mongodb://voting:voting@ds143362.mlab.com:43362/votingapp');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'aszcdfrdkgvnreqqdnk',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ url: 'mongodb://voting:voting@ds143362.mlab.com:43362/votingapp'})
  //cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(VIEWS));

passport.use(new LocalStrategy(
  {usernameField:"userEmail"},
  function(username, password, done) {
   account.findOne({ userEmail: username }, (err, doc) =>{
      if(err) return done(err);
      if (!doc) {
      return done(null, false, { message: 'Incorrect username.' });
      }

    if(doc){
      bcrypt.compare(password, doc.password, (err, res) =>{
        if(res == true) {
          return done(null, doc)
        }else {
        return done(null, false, { message: 'Incorrect password.' });
        }
      });
    }
    });
  }
));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/dist', 'index.html'));
});

app.get('/checkUser', (req, res) =>{
  if (req.isAuthenticated()){
    res.json({userName: req.session.passport.user.userName, userEmail:req.session.passport.user.userEmail});
  }else {
    res.send(false)
  };
});

app.get('/logout',(req, res, next) =>{
  req.logout();
  req.session.destroy(function (err) {
    return res.send({ authenticated: req.isAuthenticated() });
  });
  res.json({});
});

app.post('/signup', (req, res) => {
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const password = req.body.password;
  account.findOne({ userEmail: req.body.userEmail }, (err, doc) =>{
    if(err) return res.send("database is down please try again later.");
    if(doc){
      return res.send("Email already existed.");
    }else {
 bcrypt.hash(password, saltRounds, function(err, hash) {
 const data = new account({
   userName,
   userEmail,
   password: hash
 });
 data.save(err =>{
 if(err) return res.send("error saving to database.");
});
  req.login({userName, userEmail}, (err) => {
  return res.send(true);
  });
});
}
});
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/' }),(req, res) => {
   res.json(true);
});

app.post('/postChart',(req, res) => {
  const userEmail = req.body.userEmail;
  const title = req.body.title;
  const data = req.body.data;
  const colors = req.body.colors;
  const value = Array(data.length).fill(0);
  const dataChart  = new chart({
    userEmail,
    title,
    data,
    value,
    colors
  });
  dataChart.save((err,rec) =>{
    if(err) res.send("error saving to database");
    if(!err) {
      return res.send(rec._id);
    }
  });
});

app.post('/getChart',(req, res) =>{
  chart.findOne({_id: req.body.id},(err,doc)=>{
    if(err) res.send("database is down please try again later.");
    if(doc) {
      return res.json(doc);
    }
  });
});

app.put('/postValue',(req, res)=>{
  chart.findOne({_id: req.body.id},(err,doc)=>{
if(err) res.send(err);
if(doc) {
const index = Number(req.body.index);
doc.value.set(index, doc.value[index]+1);
doc.save()
res.send(true)
}
});
});

app.post('/getChartItems',(req,res)=>{
  chart.find({userEmail: req.body.userEmail},(err,doc)=>{
    if(err) res.send(err);
    if(doc) res.send(doc);
  });
});

app.get('/getAllPolls',(req,res) =>{
  chart.find({},(err,doc)=>{
    if(err) res.send(err);
    if(doc) res.send(doc);
  });
});
passport.serializeUser(function(userEmail, done) {
  done(null, userEmail);
});

passport.deserializeUser(function(userEmail, done) {
    done(null, userEmail);
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log('server is working');
});
