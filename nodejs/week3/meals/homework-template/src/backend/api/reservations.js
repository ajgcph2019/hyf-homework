const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const getReservation = await knex.select("*").table("reservation");
    response.json(getReservation);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const { number_of_guests, meal_id, created_date } = request.body;
    const addReservation = await knex("reservation").insert({
      number_of_guests,
      meal_id,
      created_date,
    });
    response.json(addReservation);
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const getReservationWIthID = await knex("reservation").where({
      id: request.params.id,
    });
    response.send(getMealsWIthID);
  } catch (error) {
    throw error;
  }
});
router.put("/:id", async (request, response) => {
  try {
    //knex syntax for selecting things. Look up the documentation for knex for further info
    const { number_of_guests, meal_id, created_date } = request.body;
    const updateMealsWIthID = await knex("reservation")
      .where({ id: request.params.id })
      .update({ number_of_guests, meal_id, created_date });
    response.json(updateMealsWIthID);
  } catch (error) {
    throw error;
  }
});
router.delete("/:id", async (request, response) => {
  try {
    //knex syntax for selecting things. Look up the documentation for knex for further info
    const deleteMealWIthID = await knex("reservation")
      .where({ id: request.params.id })
      .del();
    response.json(deleteMealWIthID);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
