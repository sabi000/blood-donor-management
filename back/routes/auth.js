const express = require("express");
const {registerDonor, registerOrg, login} = require("../controllers/auth");

const router = express.Router();

router.post("/registerDonor", registerDonor)
router.post("/registerOrg", registerOrg)
router.post("/login", login)




module.exports = router;
