const express = require("express");
const {addEvent, getEvent, deleteEvent} = require("../controllers/event")
const {getDonorList, getDonorbyId} = require("../controllers/donor")
const {verifyAuth} = require("../utils")

const router = express.Router();

//landing page
router.get("/", (req, res) => {
    return res.send("Homepage")
});

//event
router.post("/event", verifyAuth, addEvent )
router.get("/event", getEvent)
router.delete("/event", verifyAuth, deleteEvent)


//donor
router.get("/donorList", getDonorList)



module.exports = router;
