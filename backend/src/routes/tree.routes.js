const express = require("express");
const data = require("../data/graphData.json");
const buildTree = require("../utils/buildTree");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const tree = buildTree(data);
    res.json({ success: true, data: tree });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
