const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const meals = require("./routes/meals.js");
const reservations = require("./routes/reservations.js");
const reviews = require("./routes/reviews.js");


app.use("/meals", meals);
app.use("/reservations", reservations);
app.use("/reviews", reviews);

app.listen(port, () => console.log(`meal app is listening on port ${port}`));
