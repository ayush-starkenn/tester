const Router = require("express").Router();
const { saveLogin, saveDetails } = require("../Controllers/signup");
Router.post("/signup", saveLogin);
Router.post("/details", saveDetails);

module.exports = Router;
