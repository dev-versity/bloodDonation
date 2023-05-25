const express = require("express");
const jwt = require("jsonwebtoken");
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

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "user does not exist" });
    } else if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ message: "password invalid" });
    }
    console.log(req.user);
    const token = jwt.sign(
      { user_id: req.user.id,},
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).send({
      message: "user connected successfully",
      user,
      token
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  register,
  login,
};
