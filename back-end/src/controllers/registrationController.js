const database = require("../database");

const RegistrationController = {
    registerAtEvent : (req, res) =>{
        const {userId , eventId} = req.body;
        const query = "insert into registration (userId , eventId) values (?,?);";
        database.query(query,[userId , eventId], (error, result) => {
            if (error) {
                res.json({success: false , message: "Error During Registration ", error});
                console.error(error);
            }
            else {
                res.json({success: true , message : "You are registred at event successfully", id : result.userId});
                console.log(result);
            }
        });
    }
}

module.exports = RegistrationController;