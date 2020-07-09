const express = require("express");
const indexController = require("../controllers/index");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

/* GET home page. */
router.get("/", indexController.index);
router.get("/land", authMiddleware, indexController.land);

module.exports = router;
