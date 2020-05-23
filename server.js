const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/", (req, res) => {
  res.send("hello ");
});

app.listen(3001);