const assert = require('assert');
const GOTChar = require('../models/GOTChar');

describe('Finding records', function(){
  var char;
  beforeEach(function(done){
    char = new GOTChar({
      name: 'John Snow'
    })
    char.save().then(function(){
      done();
    })
  })

  it('it finds one record from the database', function(done){
      GOTChar.findOne({ name: 'John Snow'}).then(function(result){
        assert( result.name === 'John Snow');
        done();
      })
  })


  it('it finds one record by ID from the database', function(done){
      GOTChar.findOne({ _id: char._id }).then(function(result){
        assert( result._id.toString() === char._id.toString());
        done();
      })
    })
  })
