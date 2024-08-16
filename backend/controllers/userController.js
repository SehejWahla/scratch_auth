import expressAsyncHandler from "express-async-handler";
import User from "../models/userModels.js";

// @desc  Auth user/set token
// route  POST /api/users/auth
// @access Public
const authUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc  Register new user
// route  POST /api/users
// @access Public
const registerUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "User registered" });
});

// @desc  Log Out User
// route  POST /api/users/logout
// @access Private
const logoutUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// @desc  Get User Profile
// route  GET /api/users/profile
// @access Private
const getUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc  Update User Profile
// route  PUT /api/users/profile
// @access Private
const updateUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
