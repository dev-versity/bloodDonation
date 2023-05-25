const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const port = process.env.PORT;

const mongoose = require('./config/dbconfig');
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})