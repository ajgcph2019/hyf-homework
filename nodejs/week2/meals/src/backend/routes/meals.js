const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

//Respond with the json for the meal with the corresponding id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!isNaN(id)) {
    const getMealWithID = meals.filter((meal) => meal.id === parseInt(id));

    if (getMealWithID.length === 0) {
      return res.status(404).send(`Meal with the  id ${id} is not found`);
    }
    res.json(getMealWithID);
  }
  return res.status(400).json(`Bad request, ${id} is not a number`);
});

// Respond with the json for all the meals.
// maxPrice	- Get meals that has a price smaller than maxPrice - /meals?maxPrice=90
// title - Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde - /meals?title="Indian platter"
// createdAfter	- Get meals that has been created after the date - /meals?createdAfter=2019-04-05
// limit - Only specific number of meals - /meals?limit=4

router.get("/", (req, res) => {
  const maxPrice = req.query.maxPrice;
  const queryTitle = req.query.title;
  const dateQuery = req.query.createdAfter;
  const queryLimit = req.query.limit;

  if (maxPrice) {
    const parsedPrice = parseFloat(maxPrice);
    if (!isNaN(parsedPrice)) {
      const mealsPriceLessThanMaxPrice = meals.filter(
        (meal) => meal.price < parseFloat(maxPrice)
      );
      if (mealsPriceLessThanMaxPrice.length === 0) {
        return res.json(404).send("No meals in the price range");
      }
      return res.json(mealsPriceLessThanMaxPrice);
    }
    return res.status(400).json(`Bad request, ${maxPrice} is not a number`);
  }
  if (queryTitle) {
    const mealsWithMatchingTitle = meals.filter((meal) =>
      meal.title.toLowerCase().includes(queryTitle.toLowerCase())
    );
    if (mealsWithMatchingTitle.length === 0) {
      return res
        .status(404)
        .json(`No meal matched with the word ${queryTitle}`);
    }
    res.json(mealsWithMatchingTitle);
  }
  if (dateQuery) {

    const mealsCreatedAfter = meals.filter(
      (meal) => Date.parse(meal.createdAt) > Date.parse(dateQuery)
    );

    if (mealsCreatedAfter.length === 0) {
      return res
        .status(404)
        .send(`No meal that has been created after ${dateQuery}`);
    }
    return res.json(mealsCreatedAfter);
  }

  if (queryLimit) {
    const displayMealsWithLimit = meals.filter(
      (meal) => meal.id <= parseInt(queryLimit)
    );

    if (displayMealsWithLimit.length === 0) {
      return res.status(400).send(`Bad request, ${queryLimit} is not a number`);
    }
    res.send(displayMealsWithLimit);
  }
  res.send(meals);
});

module.exports = router;
