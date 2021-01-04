const router = require("express").Router();
const configurationController = require("../controllers/configurationController");

// GET
// /api/v1/stake-limit-service/configuration
router.get("/", configurationController.getConfiguration);

// PUT
// /api/v1/stake-limit-service/configuration
router.put("/", configurationController.updateConfiguration);

module.exports = router;
