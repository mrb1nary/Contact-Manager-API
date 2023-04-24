const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please provide a username"],
    },
    password:{
        type:String,
        required:[true, "Please provide a password"],
    },
    email:{
        type:String,
        required:[true, "Please provide an email"],
        unique:[true, "Email already exists"],
    }
})

module.exports = mongoose.model("User", userSchema);