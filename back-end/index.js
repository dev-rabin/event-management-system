const express = require("express");
const app = express();
const port = 7000;
const database = require("./src/database");
const cors = require("cors");
const path = require('path');

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/api/uploads', express.static('uploads'));


app.get("/", (req, res) => {
    database.ping((error)=>{
        if (error) {
            res.send("Server is down");
        }
        else {
            res.send("Server is connected");
        }
    })
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
});

const userRouter = require("./src/routes/userRoutes");
app.use("/api", userRouter);


const eventRouter = require("./src/routes/eventRoutes");
app.use("/api", eventRouter);


const registrationRouter = require("./src/routes/registrationRoutes");
app.use("/api", registrationRouter);


const adminRouter = require("./src/routes/adminRoutes");
app.use("/api/admin", adminRouter);