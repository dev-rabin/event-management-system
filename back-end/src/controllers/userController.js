const database = require("../database");
const generateToken  = require("../middleware/generateToken");

const UserController = {

    createUser : (req, res) =>{
        const {name , email , password} = req.body;
        const query = "insert into user (name, email, password) values (?,?,?)";
        database.query(query,[name, email,password], (error, result) =>{
            if (error) {
                if (error.code === "ER_DUP_ENTRY") {
                    res.json({ success: false, message: "Email already registered!" });
                } else {
                    res.json({ success: false, message: "Error creating user:", error });
                    console.error(error);
                }
            } else {
                const token = generateToken(result.userId, result.name );
                res.json({succees : true , message : "User created successfully", data:result , token : token});
                console.log("User created successfullly : ", result);
                console.log("User register token : ", token);
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
                const token = generateToken(user.userId, user.name );
                res.json({succees : true , message : "User login successfully!", data : user, token : token});
                console.log("User login token : ", token);
                console.log("Login user result :",user);
            }
        })
    },
}

module.exports = UserController;