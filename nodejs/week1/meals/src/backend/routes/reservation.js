const reservations = require("../data/reservations");

//Respond with the json for a random reservation
module.exports = (req, res) => {
  const randomReservation =
    reservations[Math.floor(Math.random() * reservations.length)];
  res.send(randomReservation);
};

