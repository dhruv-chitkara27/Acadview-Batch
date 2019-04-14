const mongoose = require('mongoose');


mongoose.Promise = global.Promise

before(function(done){
  mongoose.connect('mongodb://localhost/myDatabase');

  mongoose.connection.once('open', () => {
    console.log('Connection is successful. You are awesome.....')
    done();
  }).on('error', (error) => {
    console.log('Connection error:', error)
  })
})


 beforeEach((done) => {
  
    mongoose.connection.collections.gotchars.drop(() => {
      done();
    }) 
 }) 
