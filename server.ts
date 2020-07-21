// Dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// env vars
require("dotenv").config();

// Express setup
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB."));

db.on("error", (e) => {
  console.error(e);
  throw "failed connection to db";
});

// Starts server on port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
