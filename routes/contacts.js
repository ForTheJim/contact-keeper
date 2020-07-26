const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get list of user's contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Gets all contacts");
});

// @route   POST api/auth
// @desc    Adds new contact to contacts
// @access  Private
router.post("/", (req, res) => {
  res.send("Add New Contact");
});

// @route   PUT api/contacts/:id
// @desc    Updates contact in user's contact list
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Updates existing contact");
});

// @route   DELETE api/auth
// @desc    Deletes contact from user's contact list
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Contact deleted");
});

// Export Router
module.exports = router;
