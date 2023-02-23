const express = require("express");
const {addEvent} = require("../controllers/event")
const {getDonorList} = require("../controllers/donor")

const router = express.Router();

//post

router.post("/addEvent", addEvent )


//get

router.get("/", (req, res) => {
    return res.send("Homepage")
});

router.get("/donorList", getDonorList)

module.exports = router;