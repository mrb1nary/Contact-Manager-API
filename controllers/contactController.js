const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};
const getContactById = (req, res) => {
  res.status(200).json({ message: `Get contact with ID ${req.params.id}` });
};

const createContact = (req, res) => {
  console.log("The request body", req.body);
  if(!name || !email || !phone){
    return res.status(400).json({message: "Please provide all the fields"})
  }
};

const updateContacWithId = (req, res) => {
  res.status(200).json({ message: `Update contact with id ${req.params.id}` });
};

const deleteContactWithId = (req, res) => {
  res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContacWithId,
  deleteContactWithId,
};