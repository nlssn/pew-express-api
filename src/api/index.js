const express = require("express");

const things = require("./things");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API",
  });
});

router.use("/things", things);

module.exports = router;
