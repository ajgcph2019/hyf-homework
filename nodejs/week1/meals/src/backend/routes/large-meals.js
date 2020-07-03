const mealsWithReviews = require("../data/mealsWithReviews.js");

//	Respond with the json for all the meals that can fit lots of people

module.exports = (req, res) => {
  const largeMeals = mealsWithReviews.filter(
    (meal) => meal.maxNumberOfGuests >= 7);
  res.send(largeMeals);
};
