const express = require("express");
const {addEvent, getEvent, deleteEvent, editEvent, getEventProfile, getOrgEvent} = require("../controllers/event")
const {getDonorList, deleteDonor, editDonor, getDonorProfile} = require("../controllers/donor")
const {deleteOrg, editOrg, getOrgList, getOrgProfile} = require("../controllers/org")
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
router.get("/eventprofile", verifyAuth, getEventProfile)
router.get("/getorgevent", verifyAuth, getOrgEvent)


//donor
router.get("/donor", getDonorList)
router.delete("/donor", verifyAuth, deleteDonor)
router.put("/donor", verifyAuth, editDonor)
router.get("/donorprofile", verifyAuth, getDonorProfile)

//org
router.get("/org", getOrgList)
router.delete("/org", verifyAuth, deleteOrg)
router.put("/org", verifyAuth, editOrg)
router.get("/orgprofile", verifyAuth, getOrgProfile)

module.exports = router;
