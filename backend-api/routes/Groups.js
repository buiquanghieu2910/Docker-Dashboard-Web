var express = require("express");
var router = express.Router();

const GroupsController = require("../controllers/GroupsController");
router.post("/", GroupsController.create);
router.get("/", GroupsController.fetch);
router.delete("/", GroupsController.delete);

module.exports = router;
