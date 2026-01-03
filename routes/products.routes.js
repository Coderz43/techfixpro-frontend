const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "USB Cable", price: 5 },
    { id: 2, name: "Fast Charger", price: 15 },
    { id: 3, name: "Screen Protector", price: 7 }
  ]);
});

module.exports = router;
