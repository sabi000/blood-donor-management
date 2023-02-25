const express = require("express");
const {addEvent, getEvent, deleteEvent, editEvent} = require("../controllers/event")
const {getDonorList, deleteDonor, editDonor} = require("../controllers/donor")
const {deleteOrg, editOrg, getOrgList} = require("../controllers/org")
const {verifyAuth} = require("../utils");

const router = express.Router();

//landing page
router.get("/", (req, res) => {
    return res.send("Homepage")
});

//event
router.post("/event", verifyAuth, addEvent )
router.get("/event", getEvent)
router.delete("/event", verifyAuth, deleteEvent)
router.put("/event", verifyAuth, editEvent)


//donor
router.get("/donor", getDonorList)
router.delete("/donor", verifyAuth, deleteDonor)
router.put("/donor", verifyAuth, editDonor)

//org
router.get("/org", getOrgList)
router.delete("/org", verifyAuth, deleteOrg)
router.put("/org", verifyAuth, editOrg)


module.exports = router;
