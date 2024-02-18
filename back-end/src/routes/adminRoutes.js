const express = require ("express");
const adminController = require("../controllers/adminController");
const adminRouter = express.Router();

adminRouter.get("/users", adminController.getAllUsers);
adminRouter.get("/events", adminController.getAllEvents);
adminRouter.get("/contacts", adminController.getAllContacts);

module.exports = adminRouter;