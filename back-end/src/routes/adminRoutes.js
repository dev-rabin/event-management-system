const express = require ("express");
const adminController = require("../controllers/adminController");
const { EventController, upload } = require("../controllers/eventController");
const UserController = require("../controllers/userController");
const adminRouter = express.Router();

adminRouter.get("/users", adminController.getAllUsers);
adminRouter.get("/events", adminController.getAllEvents);
adminRouter.get("/contacts", adminController.getAllContacts);
adminRouter.get("/registrations", adminController.getRegistrations);
adminRouter.post("/eventCreate",upload.single("imagesURL") ,EventController.createEvent);
adminRouter.put("/eventUpdate/:eventId", EventController.updateEvent);
adminRouter.delete("/eventDelete/:eventId", EventController.deleteEvent);
adminRouter.delete("/userDelete/:userId", UserController.deleteUser);

module.exports = adminRouter;