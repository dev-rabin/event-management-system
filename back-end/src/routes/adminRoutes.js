const express = require ("express");
const AdminController = require("../controllers/adminController");
const {EventController,uploads} = require("../controllers/eventController");
const UserController = require("../controllers/userController");
const adminRouter = express.Router();
const verifyToken = require("../middleware/verifyToken")

adminRouter.get("/users",verifyToken, AdminController.getAllUsers);
adminRouter.get("/events",verifyToken, AdminController.getAllEvents);
adminRouter.get("/contacts",verifyToken, AdminController.getAllContacts);
adminRouter.get("/registrations",verifyToken, AdminController.getRegistrations);
adminRouter.post("/eventCreate",verifyToken,uploads.single("imagesURL"),EventController.createEvent);
adminRouter.put("/eventUpdate/:eventId",verifyToken, EventController.updateEvent);
adminRouter.delete("/eventDelete/:eventId",verifyToken, EventController.deleteEvent);
adminRouter.delete("/userDelete/:userId",verifyToken, UserController.deleteUser);
adminRouter.put("/statusUpdate",verifyToken, AdminController.updateRegistrationStatus);
adminRouter.delete("/contactDelete/:contactId",verifyToken, AdminController.deleteContactId);

module.exports = adminRouter;