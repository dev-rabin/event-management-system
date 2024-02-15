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
    loginUser : (req,res) =>{
        const {email , password} = req.body;
        const query = "select * from user where email = ? AND password = ?; ";
        database.query(query, [email, password], (error, result)=>{
            if (error) {
                res.json({success : false , message : error});
                console.error("Login user error : ",error);
                if (result.length === 0) {
                    res.json({succees : false , message : "user not found"});
                }
            } 
            else {
                const user = result[0];
                res.json({succees : true , message : "User login successfully!", id : user.insertId});
                console.log("Login user result :",user);
            }
        })
    },
    

}

module.exports = UserController;