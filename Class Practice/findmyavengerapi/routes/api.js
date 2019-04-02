const express = require('express');
const Avenger = require('../models/avenger');

const routes = express.Router();

routes.get('/avengers', (req,res) => {
  res.send({type: 'GET'});
})

routes.post('/avengers', (req,res,next) => {
  console.log('This is an incoming request', req.body)

  Avenger.create(req.body).then((avenger) => {
    res.send(avenger);
  });
}).catch(next)

routes.put('/avengers/:id', (req,res) => {
  console.log('The request parameters' , req.params.id)
  res.send({type: 'PUT'});
})

routes.delete('/avengers/:id', (req,res) => {
  res.send({type: 'DELETE'});
})

module.exports = routes;
