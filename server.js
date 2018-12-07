const express = require("express"); // Backend framework
const mongoose = require("mongoose"); // Communicate with mongoDB
const bodyParser = require("body-parser"); // Get data from HTTP requests

const app = express();

app.use(bodyParser.json()); // Bodyparser Middleware

const db = require("./config/keys").mongoURI; // DB Config

// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
