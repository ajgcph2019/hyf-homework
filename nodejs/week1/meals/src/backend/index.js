const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Routers - Inside the index.js file create routes using express

const meals = require("./routes/meals.js");
const meal = require("./routes/meal.js");
const cheapMeals = require("./routes/cheap-meals.js");
const largeMeals = require("./routes/large-meals.js");
const reservation = require("./routes/reservation.js");
const reservations = require("./routes/reservations.js");

app.get("/", (req, res) => res.send("Hello World"));
app.get("/meals", meals);
app.get("/meal", meal);
app.get("/cheap-meals", cheapMeals);
app.get("/large-meals", largeMeals);
app.get("/reservation", reservation);
app.get("/reservations", reservations);

app.listen(port, () => console.log(`meal app is listening on port ${port}`));
