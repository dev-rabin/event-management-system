require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

function generateToken (userId , name) {
    const payload = {
        userId : userId,
        name : name
    }
    const options = {
        expiresIn : "30d"
    }
    return jwt.sign(payload,secretKey,options);
}

module.exports = generateToken;

