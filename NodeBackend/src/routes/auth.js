const express = require('express');
const authRouter = express.Router();
const db = require('../config/db');
const CryptoJS = require('crypto-js'); 
const { validateRegister } = require('../utils/validateRegister');


authRouter.post("/user-register",(req,res)=>{
    try {
        const {FirstName , LastName , Email ,Phone,Address,  Password} = req.body;
        console.log(req.body);
        validateRegister(req);
        const hashedPassword = CryptoJS.SHA256(Password).toString(CryptoJS.enc.Base64);

        const query = `insert into users (FirstName,LastName,Email,Phone,Address,roleId,Password) values (?,?,?,?,?,?,?)`;
        db.pool.execute(query,[FirstName,LastName,Email,Phone,Address,2,hashedPassword],(err,result)=>{
              if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                const savedUser = {
                    id: result.insertId,
                    FirstName,
                    LastName,
                    Email,
                    Phone,
                    Address,
                    role: "Normal User"
                };
                res.json({
                    message: "User Created Succesfull",
                    savedUser: savedUser
                })
            }

        })

 
        
    } catch (error) {
        res.status(400).json({ message: error.message });
        
    }
})

module.exports = authRouter;