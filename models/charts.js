const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chartsSchema = new Schema(
  {
    userEmail: String,
    title: String,
    data: Array,
    value: Array,
    colors: Array
  }
);

module.exports = mongoose.model('charts', chartsSchema);
