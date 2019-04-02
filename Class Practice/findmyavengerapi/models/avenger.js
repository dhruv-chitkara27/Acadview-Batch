const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvengerSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'This is a required field']
  },
  avenger: {
    type: String
  },
  dead: {
    type: Boolean,
    default: false
  }
});

const Avenger = mongoose.models('avenger', AvengerSchema);

module.exports = Avenger;
