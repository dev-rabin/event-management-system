const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

function verifyToken (req , res, next) {
    const token = req.headers.authorization;
    console.log("Verify token : ", token);

    if(!token){
       return res.json({success : false , message : "Unauthorized HTTP ,Token not provided"});
    } 
    jwt.verify(token,secretKey, (error, decoded) => {
        if (error) {
            return res.status(403).json({ message: error, success: false }); 
        }
        console.log("decoded token : " , decoded);
        next();
    })
}

module.exports = verifyToken;