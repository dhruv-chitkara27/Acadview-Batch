const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GOTCharSchema = new Schema({
  name: String,
  house: String, 
  age: Number   
});


const GOTChar = mongoose.model('GOTChar', GOTCharSchema);

module.exports = GOTChar;
