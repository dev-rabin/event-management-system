const database = require("../database");
const multer = require("multer");
const path = require("path");

// Define the base URL for the images
const baseUrl = "http://localhost:7000/api/uploads/";

const uploadDir = path.join(__dirname, '..', 'uploads');

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const EventController = {
  createEvent: (req, res) => {
    const {
      organizerId,
      title,
      description,
      date,
      location,
      capacity,
      category,
    } = req.body;

    let imagesURL = null;
    if (req.file) {
      imagesURL = baseUrl + req.file.filename;
    }
    
    const query =
      "INSERT INTO event (organizerId, title, description, date, location, capacity, category, imagesURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    database.query(
      query,
      [
        organizerId,
        title,
        description,
        date,
        location,
        capacity,
        category,
        imagesURL,
      ],
      (error, result) => {
        if (error) {
          console.error("Error creating event:", error);
          return res
            .status(500)
            .json({ success: false, message: "Event not created", error });
        } else {
          console.log("Event created successfully:", result);
          return res.status(200).json({
            success: true,
            message: "Event created successfully",
            id: result.insertId,
          });
        }
      }
    );
  },
  getAllEvents: (req, res) => {
    const query = "SELECT * FROM event";
    database.query(query, (error, result) => {
      if (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({
          success: false,
          message: "Error during fetching events",
          error,
        });
      } else {
        console.log("Events fetched successfully:", result);
        res.status(200).json({ success: true, data: result });
      }
    });
  },
  

  updateEvent: (req, res) => {
    const eventId = req.params.eventId;
    console.log("update eventID: ", eventId);
    const {
      title,
      description,
      date,
      location,
      capacity,
      category,
      imagesURL,
    } = req.body;
    const query = `UPDATE event SET title = ?, description = ?, date = ?, location = ?, capacity = ?, category = ?, imagesURL = ? WHERE eventId = ?`;

    database.query(
      query,
      [
        title,
        description,
        date,
        location,
        capacity,
        category,
        imagesURL,
        eventId,
      ],
      (error, result) => {
        if (error) {
          console.error("Update event error: ", error);
          res.json({ success: false, message: error });
        } else {
          const updatedEvent = result;
          res.json({
            success: true,
            message: "Event has been updated",
            data: updatedEvent,
          });
          console.log("Event update result: ", updatedEvent);
        }
      }
    );
  },
  deleteEvent: (req, res) => {
    const eventId = req.params.eventId;
    console.log("delete user eventId : ", eventId);
    const sql = "DELETE FROM event WHERE eventId = ?";
    database.query(sql, [eventId], (err, result) => {
      if (err) {
        console.error("Error deleting event:", err);
        res.json({
          success: false,
          message: "Error deleting event",
          error: err,
        });
        return;
      } else {
        console.log("Event deleted successfully");
        return res.json({
          success: true,
          message: "Event deleted successfully",
        });
      }
    });
  },
  fetchByEventId: (req, res) => {
    const eventId = req.params.eventId;
    const query = "SELECT * FROM event WHERE eventId = ?";
    database.query(query, [eventId], (error, results) => {
      if (error) {
        console.error("Error fetching event details:", error);
        return res
          .status(500)
          .json({ success: false, message: "Error fetching event details" });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Event not found" });
      }

      const eventDetails = results[0];
      console.log("Event details by eventId : ", eventDetails);
      return res.json({ success: true, data: eventDetails });
    });
  },
};

module.exports = { EventController, upload };
