const express = require("express");
const {EventController} = require("../controllers/eventController");
const eventRouter = express.Router();


eventRouter.get("/events", EventController.getAllEvents);
eventRouter.get("/events/:eventId",EventController.fetchByEventId);


module.exports = eventRouter;