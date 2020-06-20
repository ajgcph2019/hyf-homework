const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Routers - Inside the index.js file create routes using express
app.get("/", (req, res) => res.send("Hello World"));

 const meals = require("./routes/meals.js");
 app.get("/meals", meals);


//Respond with the json for the meal with the corresponding id

const getMealWithId = require("./routes/meals.js");
app.get("/meals/:id", getMealWithId);



//Respond with the json for the reservation with the corresponding id
const resWithID = require("./routes/reservations.js");
app.get("/reservations/:id", resWithID);


const reservations = require("./routes/reservations.js");
app.get("/reservations", reservations);

//Respond with the json for the reviews
const reviews = require("./routes/reviews.js");
app.get("/reviews", reviews);

//Respond with the json for the review with ID
const getReviewWithID = require("./routes/reviews.js");
app.get("/reviews/:id", getReviewWithID);

app.listen(port, () => console.log(`meal app is listening on port ${port}`));
