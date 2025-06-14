const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();



app.use(express.json());
app.use(cookieParser());



app.use("/ping",(req, res, next)=>{
    res.send("Hello from server")

})

app.listen(3000 , ()=>{
    console.log("Server started at port no 3000");
    
})
