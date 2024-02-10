const mysql = require("mysql2")

const database = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Robin@123",
    database : "event_management",
});

database.connect((error)=>{
    if (error) {
       console.error(error);
    } else {
        console.log("Connected to database");
    }
})

module.exports = database;