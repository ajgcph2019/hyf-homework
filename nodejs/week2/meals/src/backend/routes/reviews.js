const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews");

// Respond with the json for all reservations
router.get("/", (req, res) => {
  res.send(reviews);
});
// Respond with the json for reservation with ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const getReviewWithID = reviews.filter((review) => review.id === id);
  res.send(getReviewWithID);
});

module.exports = router;
