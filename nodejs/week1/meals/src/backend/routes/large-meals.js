const express = require("express");
const app = express();
const meals = require("../data/meals.json");

//	Respond with the json for all the meals that can fit lots of people
app.get("/large-meals", (req, res) => {
  res.send(meals.filter((meal) => meal.maxNumberOfGuests >= 7));
});
module.exports = app;
