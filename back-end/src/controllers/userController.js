const database = require("../database");

const UserController = {

    createUser : (req, res) =>{
        const {name , email , password} = req.body;
        const query = "insert into user (name, email, password) values (?,?,?)";
        database.query(query,[name, email,password], (error, result) =>{
            if (error) {
                res.json({succees: false , message: error});
                console.log("creating user error : ", error);
            } else {
                res.json({succees : true , message : "User created successfully", id : result.insertId});
                console.log("User created successfullly : ", result);
            }
        })
    },

}

module.exports = UserController;