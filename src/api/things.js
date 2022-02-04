const express = require("express");

const router = express.Router();

const things = [
  {
    _id: 1,
    title: "Old t-shirt",
    description: "A black t-shirt with some old crusty band logo",
  },
  {
    _id: 2,
    title: "D20",
    description: "Roll it...",
  },
  {
    _id: 3,
    title: "VHS tape",
    description: "It seems to be some homade Jackass-type stuff",
  },
  {
    _id: 4,
    title: "Finger gun",
    description: "It goes pew pew pew",
  },
  {
    _id: 42,
    title: "Towel",
    description: "You should always have this with you",
  },
];

router.get("/", (req, res) => {
  res.json(things);
});

module.exports = router;
