const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountsSchema = new Schema(
  {
    userName: String,
    userEmail: String,
    password: String
  }
);

module.exports = mongoose.model('accounts', accountsSchema);
