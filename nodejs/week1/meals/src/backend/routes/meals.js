const express = require("express");
const app = express();
const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

//Respond with the json for all the meals
app.get("/meals", (req, res) => {
  meals.forEach((meal) => {
    meal.reviews = reviews.filter((review) => meal.id === review.mealId);
    return meal;
  });

  res.send(meals);
});

module.exports = app;
