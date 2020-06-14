const express = require('express');
const app = express();
const reservations = require("../data/reservations");

// Respond with the json for all reservations
app.get('/reservations', (req, res) => {
  res.send(reservations);
});

module.exports = app;