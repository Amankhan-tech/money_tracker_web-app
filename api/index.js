const express = require("express");
const cors = require("cors");
const Transaction = require('./models/Transaction.js');
const app = express();
const events = require("events");
const { mongoose } = require("mongoose");
events.defaultMaxListeners = 20; // Or any higher number
require('dotenv').config();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  // credentials: true, // Include cookies in cross-origin requests
};
app.use(cors(corsOptions));

// Middleware to parse JSON body
app.use(express.json());


//Routes

app.post("/api/transaction", async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        const { name, description, datetime } = req.body;

        // Create and save the transaction in the database
        const transaction = await Transaction.create({ name, description, datetime });

        // Respond with the created transaction
        res.status(201).json(transaction);
    } catch (error) {
        // Catch and log errors
        console.error("Error creating transaction:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(4040, () => {
  // Corrected syntax
  console.log("Server is running on port 4040");
});
