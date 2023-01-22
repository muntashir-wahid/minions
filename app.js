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

app.all("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: `can't find ${req.originalUrl} in the server.`,
  });
});

module.exports = app;
