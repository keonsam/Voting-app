"use strict";
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const VIEWS = path.join(__dirname, '/dist');

app.use(express.static(VIEWS));

app.listen(process.env.PORT || 3000, ()=>{
  console.log('server is working');
})
