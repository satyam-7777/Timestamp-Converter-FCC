const express = require("express");
const { convertTimestamp } = require("../controllers/timestampController");

const router = express.Router();

router.route("/").get(convertTimestamp);
router.route("/:date").get(convertTimestamp);

module.exports = router;
