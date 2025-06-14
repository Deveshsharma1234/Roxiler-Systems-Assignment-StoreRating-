const express = require('express');
const authAndAuthorize = require('../middleware/authAndAuthorize');
const storeRouter = express.Router();
const db = require('../config/db');

//add store if role id of user is 3 i.e store owner;
storeRouter.post("/add-store", authAndAuthorize(1), async (req, res) => {
    try {
        const { name, description, location, UserId } = req.body;
        const statement = `SELECT roleId FROM users WHERE UserId = ?`
        const user = await new Promise((resolve, reject) => {
            db.pool.query(statement, [UserId], (error, users) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(users[0]);
                }
            });
        });
        if (!user || user.roleId !== 3) {
            return res.status(400).json({ message: "Invalid store owner" });
        }
        const statement2 = `INSERT INTO stores (name, description, location, UserId) VALUES (?, ?, ?, ?)`;
        db.pool.execute(statement2, [name, description, location, UserId], (error, results) => {
            if (error) {
                return res.status(500).json({ message: error.message });
            } else {
                console.log(results);
                res.status(201).json({ message: "Store registered successfully" });
            }



        })

    } catch (error) {
        res.status(400).json({ message: error.message })

    }
})








module.exports = storeRouter;