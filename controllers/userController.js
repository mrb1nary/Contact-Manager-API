const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const {username, password, email} = req.body;
  if(!username || !password || !email){
    res.status(400);
    throw new Error("Please provide all fields");
  }

  const isEmailTaken = await User.findOne({email});
    if(isEmailTaken){
        res.status(400);
        throw new Error("Email already taken");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        password:hashedPassword,
        email
    });
    if(user){
        res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email
        })
    }
    else{
        res.status(400);
        throw new Error("Invalid user data");
    }
});

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"Login route"})
});

const getCurrentUser = asyncHandler(async (req,res)=>{
    res.json({message:"Current user info"})
});

module.exports = { registerUser, loginUser, getCurrentUser };
