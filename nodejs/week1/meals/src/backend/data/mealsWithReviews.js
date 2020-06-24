const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

function getMealsWithReviews(){
    const mealsWithReviews = meals.map((meal) => {
        meal.reviews = reviews.filter((review) => review.mealId === meal.id)
    return meal;
    });
   return mealsWithReviews;
}

module.exports = getMealsWithReviews() ;