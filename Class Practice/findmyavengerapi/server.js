const express = require('express');

const app = express();


app.get('/api', function(req,res){
  console.log('A request was made from the browser!!!');
  res.send({ name: 'My Name' });
});

app.listen(process.env.port || 3001, '127.0.0.1');
