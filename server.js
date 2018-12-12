const express = require("express"); // Backend framework
const mongoose = require("mongoose"); // Communicate with mongoDB
const bodyParser = require("body-parser"); // Get data from HTTP requests
const path = require("path");

const items = require("./routes/api/items");

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

// Use Routes
app.use("/api/items", items);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
