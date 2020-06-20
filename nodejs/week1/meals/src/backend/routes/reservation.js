const express = require("express");
const app = express();
const reservations = require("../data/reservations");

//Respond with the json for a random reservation
app.get("/reservation", (req, res) => {
  const randomReservation =
    reservations[Math.floor(Math.random() * reservations.length)];
  res.send(randomReservation);
});

module.exports = app;
