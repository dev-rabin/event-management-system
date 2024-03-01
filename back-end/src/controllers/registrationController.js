const database = require("../database");
const jwt = require("jsonwebtoken");

const RegistrationController = {
    registerAtEvent: (req, res) => {
        try {
            const payload = jwt.decode(req.headers.authorization);
            const userId = payload.userId;
            const { eventId } = req.body;
            const eventQuery = "SELECT title FROM event WHERE eventId = ?;";

            database.query(eventQuery, [eventId], (eventError, eventResult) => {
                if (eventError || eventResult.length === 0) {
                    console.error("Error fetching event title:", eventError);
                    return res.json({ success: false, message: "Error during registration", error: eventError });
                } else {
                    const eventTitle = eventResult[0].title;

                    const query = "INSERT INTO registration (userId, eventId) VALUES (?, ?);";

                    database.query(query, [userId, eventId], (error, result) => {
                        if (error) {
                            console.error("Error during registration:", error);
                            return res.status(500).json({ success: false, message: "Error during registration", error });
                        } else {
                            console.log("Registration successful at event with : ", eventTitle);
                            return res.json({ success: true, message: `You are registered at the event "${eventTitle}" successfully` });
                        }
                    });
                }
            });
        } catch (error) {
            console.error("Error during registration:", error);
            return res.status(500).json({ success: false, message: "Error during registration", error });
        }
    }, 
};

module.exports = RegistrationController;
