const router = require("express").Router();
const stakeServiceController = require("../controllers/stakeServiceController");

// POST
// /api/v1/stake-limit-service
router.post("/", stakeServiceController.sendTicket);

module.exports = router;
