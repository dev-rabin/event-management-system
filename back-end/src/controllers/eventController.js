const database = require("../database");
const multer = require("multer");
const moment = require("moment")

const imgConfiq = multer.diskStorage({
  destination : (req,file, callBack) =>{
    callBack(null,"./uploads" );
  },
  filename : (req,file,callBack) => {
    callBack(null , `image-${Date.now()}.${file.originalname}`)
  }
});

const isImage = (req,file,callBack)=>{
  if (file.mimetype.startsWith("image")) {
    callBack(null,true)
  }else{
    callBack(null,Error("Only image is allowed"))
  }
} 

const uploads = multer({
  storage : imgConfiq,
  fileFilter : isImage
});

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

    const imagesURL = req.file ? req.file.path : null;
    database.query("insert into event set ?", {organizerId:organizerId,title : title, description:description,date:date,location:location,capacity:capacity,category:category,imagesURL:imagesURL},(error , result) =>{
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
    }})
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

module.exports = {EventController,uploads};
