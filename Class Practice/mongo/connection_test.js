const mongoose = require('mongoose');

mongoose.connect('mongodb//localhost/myNewDB', { useNewUrlParser: true});

mongoose.connection.once('open', () => {
  console.log('Yayiee! Have successfully connected to MongoDB');
  done();
}).on('error', (error) => {
  console.log('Oops!! There was an error in the connection ' + error)
});

beforeEach(function() {
  mongoose.connection.collections.gotchars.drop();
  done();
})
