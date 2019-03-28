const gotChars = require('../models/GOTChar');
const assert = require('assert');

describe('Saving Records', function() {
  it('it will save one record to the dB', function(done) {
    var myCharacter = new GOTChar({
      name: 'Ned Stark',
      house: 'Stark'
    })

    myCharacter.save().then(function() {
      assert(myCharacter.isNew === false )
      done();
    })
  })

})
