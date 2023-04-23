const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContactById,
  createContact,
  updateContacWithId,
  deleteContactWithId,
} = require("../controllers/contactController");

router.route("/").get(getContacts);

router.route("/:id").get(getContactById);

router.route("/").post(createContact);

router.route("/:id").put(updateContacWithId);

router.route("/:id").delete(deleteContactWithId);

module.exports = router;
