const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const getReview = await knex.select("*").table("review");
    response.json(getReview);
  } catch (error) {
    throw error;
  }
});
router.post("/", async (request, response) => {
  console.log(request.body);
  try {
    const { title, description, meal_id, stars, created_date } = request.body;
    const addReview = await knex("review").insert({
      title,
      description,
      meal_id,
      stars,
      created_date,
    });
    response.json(addReview);
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const getReviewWIthID = await knex("review").where({
      id: request.params.id,
    });
    response.send(getReviewWIthID);
  } catch (error) {
    throw error;
  }
});
router.put("/:id", async (request, response) => {
  try {
    //knex syntax for selecting things. Look up the documentation for knex for further info
    const { title, description, meal_id, stars, created_date } = request.body;
    const updateMealsWIthID = await knex("review")
      .where({ id: request.params.id })
      .update({ title, description, meal_id, stars, created_date });
    response.json(updateMealsWIthID);
  } catch (error) {
    throw error;
  }
});
router.delete("/:id", async (request, response) => {
  try {
    //knex syntax for selecting things. Look up the documentation for knex for further info
    const deleteMealWIthID = await knex("review")
      .where({ id: request.params.id })
      .del();
    response.json(deleteMealWIthID);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
