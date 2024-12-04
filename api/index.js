const express = require("express");
const cors = require("cors");
const Transaction = require('./models/Transaction.js');
const app = express();
const events = require("events");
events.defaultMaxListeners = 20; // Or any higher number

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  // credentials: true, // Include cookies in cross-origin requests
};

app.use(cors(corsOptions));

// Middleware to parse JSON body
app.use(express.json());

app.post("/api/transaction", (req, res) => {
    const {name,description,datetime} = res.body;

  res.json(req.body);
});

app.listen(4040, () => {
  // Corrected syntax
  console.log("Server is running on port 4040");
});
