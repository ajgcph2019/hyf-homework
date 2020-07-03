const mealsWithReviews = require("../data/mealsWithReviews.js");

module.exports = (req, res) => {
  const cheapMeals = mealsWithReviews.filter((meal) => meal.price < 75);
  res.send(cheapMeals);
};
