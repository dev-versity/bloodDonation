const express = require('express');
const User = require('../models/userModel');
const register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await User.create({name, email, password});
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    register
}