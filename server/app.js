const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
// const User=require('./model/userSchema');
//Middleware
const middleware = (req, res, next) => {
  console.log("Hello middleware");
  next();
};
const dbaddress = process.env.DATABASE;
mongoose.connect(`${dbaddress}`, {});
const db = mongoose.connection;
const PORT = process.env.PORT;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
app.get("/", (req, res) => {
  res.send("Hello world from server");
});
app.get("/about-me", middleware, (req, res) => {
  console.log("Hello my about");
  res.send("About-me");
});
app.get("/contact", (req, res) => {
  res.send("Contact");
});
app.get("/login", (req, res) => {
  res.send("Login");
});
app.get("/register", (req, res) => {
  res.send("Register");
});
