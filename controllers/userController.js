const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};


module.exports = {
  register
};
