const reservations = require("../data/reservations");

// Respond with the json for all reservations
module.exports = (req, res) => {
  res.send(reservations);
};

