const express = require("express");
const app = express();
const meals = require("../data/meals.json");

//Respond with the json for a random meal
app.get("/meal", (req, res) => {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  res.send(randomMeal);
});

module.exports = app;
