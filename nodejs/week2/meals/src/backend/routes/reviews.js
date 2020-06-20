const express = require('express');
const app = express();
const reviews = require("../data/reviews");

// Respond with the json for all reservations
app.get('/reviews', (req, res) => {
  res.send(reviews);
});
// Respond with the json for reservation with ID
app.get('/reviews/:id', (req, res) => {
  
    const id = parseInt(req.params.id);
    console.log(req.params.id);
    const getReviewWithID = reviews.filter(review => review.id === id);
     res.send(getReviewWithID);

});

module.exports = app;