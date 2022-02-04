const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const api = require("./api");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "👉 pew pew pew",
  });
});

app.use("/api/v1", api);

module.exports = app;
