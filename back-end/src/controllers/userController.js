const database = require("../database");
const generateToken = require("../middleware/generateToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserController = {
  createUser: (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.genSalt(saltRounds, (error, salt) => {
      if (error) {
        console.log("Salt not generated:", error);
        res.json({ success: false, message: "Error creating user" });
        return;
      }
      bcrypt.hash(password, salt, (error, hash) => {
        if (error) {
          console.error("Error hashing password:", error);
          res.json({ success: false, message: "Error creating user" });
          return;
        }
        console.log("Hashed password:", hash);
        const query = "insert into user (name, email, password) values (?,?,?)";
        database.query(query, [name, email, hash], (error, result) => {
          if (error) {
            if (error.code === "ER_DUP_ENTRY") {
              res.json({
                success: false,
                message: "Email already registered!",
              });
            } else {
              res.json({
                success: false,
                message: "Error creating user",
                error,
              });
              console.error(error);
            }
          } else {
            const token = generateToken(result.userId, result.name);
            res.json({
              success: true,
              message: "User created successfully",
              data: result,
              token: token,
            });
            console.log("User created successfully:", result);
            console.log("User register token:", token);
          }
        });
      });
    });
  },
  loginUser: (req, res) => {
    const { email, password } = req.body;
    const query =
      "SELECT userId, name, email, password FROM user WHERE email = ?;";
    database.query(query, [email], (error, result) => {
      if (error) {
        res.json({ success: false, message: error });
        console.error("Login user error:", error);
        return;
      }
      if (result.length === 0) {
        res.json({ success: false, message: "User not found" });
        return;
      }
      const user = result[0];
      if (!user.password) {
        res.json({ success: false, message: "Password not found for user" });
        console.error("Password not found for user:", user.email);
        return;
      }

      const hashedPassword = user.password;

      bcrypt.compare(password, hashedPassword, function (error, passwordMatch) {
        if (error) {
          res.json({ success: false, message: "Error comparing passwords" });
          console.error("Error comparing passwords:", err);
          return;
        }
        if (passwordMatch) {
          const token = generateToken(user.userId, user.name);
          res.json({
            success: true,
            message: "User login successful!",
            data: user,
            token: token,
          });
          console.log("User login token:", token);
          console.log("Login user result:", user);
        } else {
          res.json({ success: false, message: "Incorrect password" });
          console.log("Incorrect password provided for user:", user.email);
        }
      });
    });
  },

  getUserByToken: (req, res) => {
    const payload = jwt.decode(req.headers.authorization);
    const userId = payload.userId;
    console.log("get user by token user id : ", userId);
    const query = "select userId, name , email from user where userId = ?";
    database.query(query, [userId], (error, result) => {
      if (error) {
        console.error("get user by token error", error);
        res.json({ succees: false, message: "", error });
      }
      if (result.length === 0) {
        res.json({ message: "User not found" });
      } else {
        const user = result[0];
        res.json({
          succees: true,
          message: "User loggedin successfully",
          data: user,
        });
        console.log(user);
      }
    });
  },
};

module.exports = UserController;
