const UserModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const jwt = require('jsonwebtoken');
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    email == "" ||
    username == "" ||
    password == ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = {
    username,
    email,
    password: hashedPassword,
  };
  try {
    await newUser.save();
    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email == "" || password == "") {
    return next(errorHandler(400, "All fields required"));
  }
  try {
    const validateUser = await UserModel.findOne({ email });
    if (!validateUser) {
     return next(errorHandler(400, "No user found"));
    }
    const comparePassword = await bcryptjs.compareSync(
      password,
      validateUser.password
    );
    if (!comparePassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign({id: validateUser._id, process.env.SECRET_KEY});
    res.cookies().json("Login successful")

  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login };
