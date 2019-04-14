const assert = require('assert');
const GOTChar = require('../models/GOTChar');

describe('Saving records', function(){
  it('it saves a record to the database', function(done){
    var char = new GOTChar({  
      name: 'John Snow'        
    })
 
    char.save().then(function(){
      assert(char.isNew === false)
      done();
    })
  })
})
