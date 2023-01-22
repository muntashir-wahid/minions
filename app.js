const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const minionRouter = require("./routes/minionRoutes");

const app = express();

// Global middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Roures
app.use("/api/v1/minions", minionRouter);

// Unhandled route handlers
app.all("*", (req, res, next) => {
  next(err);
});

// Globar error handler
app.use((err, req, res, next) => {
  console.log("ERROR 💥", err);

  res.status(404).json({
    status: "fail",
    message: "Something went wrong.Please try again",
  });
});

module.exports = app;
