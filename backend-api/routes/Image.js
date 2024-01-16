var express = require("express");
var router = express.Router();

const ImageController = require("../controllers/ImageController");
router.get("/fetch", ImageController.fetch);
router.get("/command", ImageController.command);

module.exports = router;
