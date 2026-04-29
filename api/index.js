const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Application Deployed Successfully");
});

app.get("/status", (req, res) => {
  res.json({
    status: "running",
    environment: "production"
  });
});

module.exports = app;