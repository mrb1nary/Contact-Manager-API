const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");
const validateAccessToken = require("../middleware/validateAccessToken");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateAccessToken, getCurrentUser);

module.exports = router;
