const database = require("../database");

const EventController = {
    createEvent : (req, res) =>{
        const {organizerId , title , description, date , location, capacity, category,images} = req.body;
        const query = "insert into event (organizerId , title , description, date , location, capacity, category,images) values (?,?,?,?,?,?,?,?)";
        database.query(query,[organizerId , title , description, date , location, capacity, category,images], (error, result) => {
            if (error) {
                res.json({success : false , message :"Event not created", error});
                console.error(error);
            } else {
                res.json({success:true, message : "Event created successfully", id: result.insertId});
                console.log(result);
            }
        });
    }, 
    getAllEvents : (req, res) => {
        const query = "select * from event";
        database.query(query, (error,result)=>{
            if(error){
                res.json({success : false , message : "Error during fecthing events"});
            } else {
                res.json({success : true, data : result});
            }
        })
    }
}

module.exports = EventController;