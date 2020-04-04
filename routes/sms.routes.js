const express = require("express");
const router = express.Router();

const SMSController = require("../controllers/sms.controller");

router.post("/", SMSController.sendSMS);

module.exports = router;
