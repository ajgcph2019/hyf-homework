const mealWithReview = require("../data/mealsWithReviews.js");

//Respond with the json for all the meals
module.exports = (req, res) => {
  res.send(mealWithReview);
};

 
