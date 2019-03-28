const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GOTSchema = new Schema({
    name: String,
    house: String,
    age: Number
})

const gotChar = mongoose.model('gotChar', GOTSchema);

module.exports = gotChar; 