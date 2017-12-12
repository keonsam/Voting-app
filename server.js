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
  const userName = req.body.str;
  const userEmail = req.body.eml;
  const password = req.body.pass;
  account.findOne({ userEmail: req.body.eml }, (err, doc) =>{
    if(err) return res.send(err);
    if(doc){
      console.log("already saved");
    }
  });
 const data = new account({
   userName,
   userEmail,
   password
 });
 data.save(err =>{
 if(err) console.log('Error Saving to Database');
});
});

app.post('/login', (req, res) => {
  let loginName;
  let loginEmail;
  let loginPassword;
  account.findOne({ userEmail: req.body.eml }, (err, doc) =>{
    if(err) return res.send(err);
    if (!doc) {
      res.send("do not exist");
    }
    if(doc){
      if(doc.password = req.body.pass){
        res.send("great programmer");
      }
    }
  });
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log('server is working');
});
