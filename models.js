const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  surname: String,
});

const Items = mongoose.model('Items', itemSchema);

module.exports = Items;
