const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Transaction = require("./models/Transaction.js");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/transaction", async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        const { price, name, description, datetime } = req.body;
        const transaction = await Transaction.create({ price, name, description, datetime });

        res.status(201).json(transaction);
    } catch (error) {
        console.error("Error creating transaction:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/api/transactions', async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.listen(4040, () => {
    console.log("Server is running on port 4040");
});
