const database = require("../database");

const adminController = {
    getAllUsers : (req,res) =>{
        const query = "select userId,name,email,isAdmin from user";
        database.query(query, (error, result) =>{
            if (error) {
                res.json({success : false , message :"Users not found", error});
                console.error(error);
            } else {
                res.json({success : true , message : "Users fetched successfully" , data : result});
                console.log(result);
            }
        })
    },
    getAllEvents : (req, res) =>{
        const query = "select * from event";
        database.query(query,(error, result)=>{
            if (error) {
                res.json({success : false, message :"Events not found", error});
                console.error(error);
            } else {
                res.json({success : true , message : "Events fetched successfully", data: result});
                console.log(result);
            }
        })
    },
    getAllContacts: (req, res) =>{
        const query = "select * from contact";
        database.query(query,(error, result)=>{
            if (error) {
                res.json({success : false, message :"Contacts not found", error});
                console.error(error);
                
            }else if (result.length === 0) {
                res.json({success : false, message : "Contacts not present yet!"});
            } 
            else {
                res.json({success : true , message : "Events fetched successfully", data: result});
                console.log(result);
            }
        })
    },
    getRegistrations : (req , res) => {
        const query = "select user.name,email,status,registration.registrationId,event.title,capacity,date from registration inner join user on registration.userId = user.userId inner join event on registration.eventId = event.eventId;";
        database.query(query,(error,result) =>{
            if (error) {
                res.json({success: false, message : "Registration data not found!"});
                console.error("Getregistrations error :", error);
            } else{
                res.json({success : true , message : "Your registration data" ,data: result});
                console.log(result);
            }
        })
    },
    updateRegistrationStatus: (req, res) => {
        const { registrationId, status } = req.body;
        const query = "UPDATE registration SET status = ? WHERE registrationId = ?";
        database.query(query, [status, registrationId], (error, result) => {
            if (error) {
                console.error("updateRegistrationStatus error:", error);
                return res.status(500).json({ success: false, message: "An error occurred while updating registration status." });
            } else {
                console.log("updateRegistrationStatus updated:", result);
                return res.json({ success: true, message: "Ticket status has been updated!", data: result });
            }
        });
    },
    deleteContactId : (req, res) => {
        const contactId = req.params.contactId;
        const query = "delete from contact where contactId = ? ";
        database.query(query,contactId,(error,result)=>{
            if (error) {
                console.error("Delete contact error : ", error);
                return res.json({success : false, message : error.message})
            } else{
                console.log("Delete contact successfully : ", result);
                return res.json({success : true, message : "Contact has been deleted"});
            }
        })
    }
}
module.exports = adminController;