const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Routers - Inside the index.js file create routes using express
app.get("/", (req, res) => res.send("Hello World"));

const meals = require("./routes/meals.js");
app.get("/meals", meals);

const meal = require("./routes/meal.js");
app.get("/meal", meal);

const cheapMeals = require("./routes/cheap-meals.js");
app.get("/cheap-meals", cheapMeals);

const largeMeals = require("./routes/large-meals.js");
app.get("/large-meals", largeMeals);

const reservation = require("./routes/reservation.js");
app.get("/reservation", reservation);

const reservations = require("./routes/reservations.js");
app.get("/reservations", reservations);

app.listen(port, () => console.log(`meal app is listening on port ${port}`));
