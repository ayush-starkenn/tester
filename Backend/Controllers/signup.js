const { signup } = require("../Models/signup");
const { details } = require("../Models/Details");

const saveLogin = (req, res) => {
  const SignupModel = new signup(req.body);
  SignupModel.save().then((ress, err) => {
    if (ress) res.send(ress);
    else res.send(err);
  });
};

const saveDetails = (req, res) => {
  const DetailsModel = new details(req.body);
  DetailsModel.save().then((ress, err) => {
    if (ress) res.send(ress);
    else res.send(err);
  });
};

module.exports = { saveLogin, saveDetails };
