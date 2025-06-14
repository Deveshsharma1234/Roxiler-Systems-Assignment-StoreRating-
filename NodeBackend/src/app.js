const express = require('express');
const { connectDB } = require("./config/db")
const cookieParser = require('cookie-parser')
const cors = require('cors');
const app = express();



app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))



app.use("/");
app.use("/ping", (req, res, next) => {
    res.send("Hello from server")

})

connectDB();



app.listen(3000, () => {
    console.log("Server started at port no 3000.");

})
