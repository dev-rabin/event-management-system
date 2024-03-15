const express = require ("express");
const adminController = require("../controllers/adminController");
const {EventController,uploads} = require("../controllers/eventController");
const UserController = require("../controllers/userController");
const adminRouter = express.Router();
const verifyToken = require("../middleware/verifyToken")

adminRouter.get("/users",verifyToken, adminController.getAllUsers);
adminRouter.get("/events",verifyToken, adminController.getAllEvents);
adminRouter.get("/contacts",verifyToken, adminController.getAllContacts);
adminRouter.get("/registrations",verifyToken, adminController.getRegistrations);
adminRouter.post("/eventCreate",verifyToken,uploads.single("imagesURL"),EventController.createEvent);
adminRouter.put("/eventUpdate/:eventId",verifyToken, EventController.updateEvent);
adminRouter.delete("/eventDelete/:eventId",verifyToken, EventController.deleteEvent);
adminRouter.delete("/userDelete/:userId",verifyToken, UserController.deleteUser);

module.exports = adminRouter;