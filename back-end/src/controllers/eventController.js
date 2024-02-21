const database = require("../database");

const EventController = {
    createEvent: (req, res) => {
        const { organizerId, title, description, date, location, capacity, category, images } = req.body;
        const query = "INSERT INTO event (organizerId, title, description, date, location, capacity, category, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        database.query(query, [organizerId, title, description, date, location, capacity, category, images], (error, result) => {
            if (error) {
                console.error("Error creating event:", error);
                return res.status(500).json({ success: false, message: "Event not created", error });
            } else {
                console.log("Event created successfully:", result);
                return res.status(200).json({ success: true, message: "Event created successfully", id: result.insertId });
            }
        });
    },
    getAllEvents: (req, res) => {
        const query = "SELECT * FROM event";
        database.query(query, (error, result) => {
            if (error) {
                console.error("Error fetching events:", error);
                return res.status(500).json({ success: false, message: "Error during fetching events", error });
            } else {
                console.log("Events fetched successfully:", result);
                return res.status(200).json({ success: true, data: result });
            }
        });
    },

    updateEvent: (req, res) => {
        const eventId = req.params.eventId;
        console.log("update eventID: ", eventId);
        const { title, description, date, location, capacity, category, images } = req.body;
        const query = `UPDATE event SET title = ?, description = ?, date = ?, location = ?, capacity = ?, category = ?, images = ? WHERE eventId = ?`;
    
        database.query(query, [title, description, date, location, capacity, category, images, eventId], (error, result) => {
            if (error) {
                console.error("Update event error: ", error);
                res.json({ success: false, message: error });
            } else {
                const updatedEvent = result;
                res.json({ success: true, message: "Event has been updated", data: updatedEvent });
                console.log("Event update result: ", updatedEvent);
            }
        });
    },
    deleteEvent: (req, res) => {
        const eventId = req.params.eventId;
        console.log("delete user eventId : ", eventId);
        const sql = 'DELETE FROM event WHERE eventId = ?';
        database.query(sql, [eventId], (err, result) => {
            if (err) {
                console.error('Error deleting event:', err);
                res.json({ success: false, message: 'Error deleting event', error: err });
                return;
            }
            else{
              console.log('Event deleted successfully');
              return res.json({ success: true, message: 'Event deleted successfully' });
            }
        });
      }
    
    

}

module.exports = EventController;
