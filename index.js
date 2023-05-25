const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})