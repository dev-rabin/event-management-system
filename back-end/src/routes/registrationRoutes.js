const express = require("express");
const RegistrationController = require("../controllers/registrationController");
const registrationRouter = express.Router();

registrationRouter.post("/registerAtEvent",RegistrationController.registerAtEvent);

module.exports = registrationRouter;