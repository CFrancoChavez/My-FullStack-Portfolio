const express = require("express")
const router = express.Router()
const { createContact, getHealth } = require("../controllers/contactController")
const { validateContactForm } = require("../middleware/validation")

// Health check endpoint
router.get("/health", getHealth)

// Contact form endpoint
router.post("/api/contact", validateContactForm, createContact)

module.exports = router
