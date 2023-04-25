const mongoose = require("mongoose");

const contactModel = new mongoose.Schema({

  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:[true, "Please provide a user id"],
    ref:"User"
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  phone: {
    type: String,
    required: [true, "Please add a phone number"],
  },
  email: {
    type: String,
    required: [false],
  },
});

module.exports = mongoose.model("Contact", contactModel);
