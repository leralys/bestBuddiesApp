const cors = require('cors');
const express = require('express');
const env = require('dotenv');

// DB
const DB = require('./modules/db');

// run express
const app = express();

env.config();
app.use(cors());
// app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.send('HELLO FROM SERVER');
});



// Server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})