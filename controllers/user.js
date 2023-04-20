// import Todo from "../models/user";
const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    console.log("todos >> ", users);
    res.status(200).json({ data: users });
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log("todos >> ", users);
    res.status(200).json({ data: users });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUser,
  getAllUsers,
};
