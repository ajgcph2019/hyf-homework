const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations");

// Respond with the json for all reservations
router.get("/", (req, res) => {
  res.send(reservations);
});
// Respond with the json for reservation with ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params.id);
  const getReservationWithID = reservations.filter(
    (reservation) => reservation.id === id
  );
  res.send(getReservationWithID);
});

module.exports = router;
