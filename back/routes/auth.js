const express = require("express");
const {registerDonor, registerOrg} = require("../controllers/auth");

const router = express.Router();

router.post("/registerDonor", registerDonor)
router.post("/registerOrg", registerOrg)




module.exports = router;
