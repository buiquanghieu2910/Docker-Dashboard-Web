var express = require("express");
var router = express.Router();

const ContainerController = require("../controllers/ContainerController");
router.get("/fetch", ContainerController.fetch);
router.get("/fetchById", ContainerController.fetchById);
router.get("/command", ContainerController.command);
router.get("/logs", ContainerController.logs);
router.get("/stats", ContainerController.stats);

module.exports = router;
