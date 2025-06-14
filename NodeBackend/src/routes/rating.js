const express = require('express');
const authAndAuthorize = require('../middleware/authAndAuthorize');
const ratingRouter = express.Router();
const db = require('../config/db');

ratingRouter.post("/add-Rating", authAndAuthorize(1,2,3), (req, res) => {
    try {
        const UserId = req.user?.UserId;
        const { StoreId, rating, comment } = req.body;
        if (!rating || rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be between 1 and 5." });
        }
        const query = `INSERT INTO ratings (UserId, StoreId, rating, comment)  VALUES (?, ?, ?, ?)`;

        db.pool.query(query, [UserId, StoreId, rating, comment], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ message: "You have already rated this store." });
                }
                return res.status(500).json({ message: err.message });
            }

            res.status(201).json({ message: "Rating submitted successfully." });
        });




    } catch (error) {
        res.status(500).json({ message: error.message });

    }

})


module.exports = ratingRouter;