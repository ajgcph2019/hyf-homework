const mealWithReview = require("../data/mealsWithReviews.js");

//Respond with the json for a random meal
module.exports = (req, res) => {
  const randomMealIndex = Math.floor(Math.random() * mealWithReview.length) ;
  const randomMeal =  mealWithReview[randomMealIndex];
  res.send(randomMeal);
};

 
