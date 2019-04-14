const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LocationSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],  
    index: '2dsphere' 
  }
})

const AvengerSchema = new Schema({
  name: {
      type: String,
      required: [true, 'This is a required field']
    },
  avenger: { type: String },
  dead: { type: Boolean, default: false },


  geometry: LocationSchema

})

const Avenger = mongoose.model('avenger', AvengerSchema);

module.exports = Avenger;
