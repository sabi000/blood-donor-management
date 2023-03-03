const express = require("express");
const {registerDonor, registerOrg, login, logout} = require("../controllers/auth");

const router = express.Router();

router.post("/registerDonor", registerDonor)
router.post("/registerOrg", registerOrg)
router.post("/login", login)

router.delete("/logout", logout)


module.exports = router;
