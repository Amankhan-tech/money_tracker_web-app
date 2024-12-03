const express = require('express');
const app = express();
const events = require('events');
events.defaultMaxListeners = 20; // Or any higher number

app.get('/api/test', (req, res) => {
    res.json({ body: 'test ok 2' }); // Corrected syntax
});

app.listen(4040, () => { // Corrected syntax
    console.log('Server is running on port 4040');
});
