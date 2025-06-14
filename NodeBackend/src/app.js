const express = require('express');
const { connectDB } = require("./config/db")
const cookieParser = require('cookie-parser')
const cors = require('cors');
const app = express();
const authRouter  = require("./routes/auth");
const storeRouter = require("./routes/store");
const userRouter = require("./routes/user");
const ratingRouter = require("./routes/rating");


app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))



app.use("/",authRouter,storeRouter,userRouter,ratingRouter);
app.use("/ping", (req, res, next) => {
    res.send("Hello from server")

})

connectDB();



app.listen(3000, () => {
    console.log("Server started at port no 3000.");

})
