const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const app = express();

mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

const Product = mongoose.model("Product");

app.get("/", (req, res) => {
  Product.create({
    title: "react native",
    description: "build native",
    url: "http://github.com/facebook/react-native"
  });
  return res.send("hello ");
});

app.listen(3001);