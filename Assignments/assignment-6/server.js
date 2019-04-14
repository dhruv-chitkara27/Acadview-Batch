const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teamavenger', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use('/api', routes); 

app.use(function(err, req, res, next){
  
  res.status(422).send({error: err.message});
})


app.listen(process.env.port || 3001, () => {
  console.log('Listening to port number 3001');
})
