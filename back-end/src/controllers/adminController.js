const database = require("../database");

const adminController = {
    getAllUsers : (req,res) =>{
        const query = "select userId,name,email from user";
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
    }

}
module.exports = adminController;