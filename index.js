const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const port = process.env.PORT;

const mongoose = require('./config/dbconfig');
const userRouter = require('./routes/userRoute');

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use("/api/v1/users", userRouter)

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})
