const express = require("express");
const app = express();
const port = 6000;
const database = require("./src/database");
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors());

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
