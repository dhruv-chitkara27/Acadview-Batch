const express = require('express');
const Avenger = require('../models/avenger');


const routes = express.Router(); 


routes.get('/avengers', (req, res, next) => {

  Avenger.aggregate().near(
     {
      near: {
        type: "Point",
        coordinates: [parseFloat(req.query.long), parseFloat(req.query.lat)]
      },
      maxDistance: 1000000,
      spherical: true,
      distanceField: "dis"
    }
  ).then((avengers) => {
    res.send(avengers)
  })
})


routes.post('/avengers', (req, res, next) => {
  console.log('req body object', req.body);
 
  Avenger.create(req.body).then((avenger) =>{
    
    res.send(avenger);
  })

  .catch(next);


})


routes.put('/avengers/:id', (req, res, next) => {

  Avenger.findByIdAndUpdate({_id : req.params.id}, req.body, { new: true }).then((avenger) => {
    console.log('Updated the avenger', avenger);
 
      res.send(avenger)
  })
})


routes.delete('/avengers/:id', (req, res, next) => {
  Avenger.findByIdAndDelete({_id : req.params.id}).then((avenger) => {
    console.log('Deleted the avenger', avenger.name);
    res.send(avenger)
  })
})

module.exports = routes;
