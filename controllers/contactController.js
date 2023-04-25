const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({ message: "Please provide name, email and phone" });
  }

  const contact = await Contact.create({
    name,
    phone,
    email,
    user_id: req.user.id,
  });

  res.status(201).json(contact);
});

const updateContacWithId = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to update contact");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedContact);
});

const deleteContactWithId = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact.user_id.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to delete contact");
  }

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.findByIdAndRemove(contact);
  res.status(200).json({ message: "Contact deleted: " + contact });
});

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContacWithId,
  deleteContactWithId,
};
