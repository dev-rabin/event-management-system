const express = require("express");
const EventController = require("../controllers/eventController");
const eventRouter = express.Router();

eventRouter.post("/createEvent" , EventController.createEvent);
eventRouter.get("/events", EventController.getAllEvents)


module.exports = eventRouter;