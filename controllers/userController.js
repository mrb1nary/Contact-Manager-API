const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register route" });
});

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"Login route"})
});

const getCurrentUser = asyncHandler(async (req,res)=>{
    res.json({message:"Current user info"})
});

module.exports = { registerUser, loginUser, getCurrentUser };
