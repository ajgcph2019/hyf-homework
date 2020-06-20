const express = require("express");
const app = express();
const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

app.get("/cheap-meals", (req, res) => {
  const cheapMeals = meals
    .filter((meal) => meal.price < 75)
    .map((meal) => {
      meal.reviews = reviews.filter((review) => meal.id === review.mealId);
      return meal;
    });

  res.send(cheapMeals);
});

module.exports = app;
