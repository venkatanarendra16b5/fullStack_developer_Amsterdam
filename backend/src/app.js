const express = require("express");
const cors = require("cors");
const treeRoutes = require("./routes/tree.routes");

const app = express();
app.use(cors());

app.use("/api/tree", treeRoutes);

module.exports = app;
