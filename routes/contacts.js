const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

const auth = require("../middleware/auth");

// @route   GET api/contacts
// @desc    Get list of user's contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
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
