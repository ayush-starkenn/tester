const express = require("express");
const cors = require("cors");
const db = require("./Connection/db");
const app = express();
const Router = require("./Routers/Route");
const bodyPar = require("body-parser");
app.use(express.json());

app.use(cors({ bodyPar, extended: true }));
app.use("/", Router);

console.log("test");
app.listen(3001, () => {
  console.log("app is listening on port : 3001 ");
});

db;
