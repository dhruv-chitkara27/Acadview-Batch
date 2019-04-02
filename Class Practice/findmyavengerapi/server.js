const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myAvengers')

const app = express();

app.use(bodyParser.json());

app.use('/api',routes);

app.use((err, req, res, next) => {
  // console.log(err)
  res.status(422).send({error: err.message})
})

app.listen(process.env.port || 3001, '127.0.0.1')
  console.log('Listening to PORT 3001');
