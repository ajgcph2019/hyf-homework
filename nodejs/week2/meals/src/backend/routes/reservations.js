const express = require('express');
const app = express();
const reservations = require("../data/reservations");

// Respond with the json for all reservations
app.get('/reservations', (req, res) => {
  res.send(reservations);
});
// Respond with the json for reservation with ID
app.get('/reservations/:id', (req, res) => {
  
    const id = parseInt(req.params.id);
    console.log(req.params.id);
    const getReservationWithID = reservations.filter(reservation => reservation.id === id);
     res.send(getReservationWithID);

});

module.exports = app;