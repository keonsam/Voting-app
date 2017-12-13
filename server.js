"use strict";
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const account = require('./models/accounts');

const VIEWS = path.join(__dirname, '/dist');

mongoose.connect(process.env.MONGO_URI || 'mongodb://voting:voting@ds143362.mlab.com:43362/votingapp');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(VIEWS));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/dist', 'index.html'));
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
 const data = new account({
   userName,
   userEmail,
   password
 });
 data.save(err =>{
 if(err) return res.send("error saving to database.");
});
  return res.send(true);
}
});
});

app.post('/login', (req, res) => {
  account.findOne({ userEmail: req.body.userEmail }, (err, doc) =>{
    if(err) return res.send("database is down.");
    if (!doc) {
      res.send("User not found please Sign up.");
    }
    if(doc){
      if(doc.password == req.body.password){
        res.send(true);
      }else {
        res.send("password is incorrect, please try again.")
      }
    }
  });
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log('server is working');
});
