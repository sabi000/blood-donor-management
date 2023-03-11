const express = require("express")
const {
	registerDonor,
	registerOrg,
	login,
	logout,
	verify,
} = require("../controllers/auth")
const { verifyAuth } = require("../utils")

const router = express.Router()

router.post("/registerDonor", registerDonor)
router.post("/registerOrg", registerOrg)
router.post("/login", login)

router.delete("/logout", logout)
router.get("/verify", verifyAuth, verify)

module.exports = router
