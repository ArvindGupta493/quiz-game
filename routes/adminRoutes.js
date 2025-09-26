const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.dashboard);
router.get("/settings", adminController.settings);
router.get("/add-question", adminController.getAddQuestion);
router.post("/add-question", adminController.postAddQuestion);
router.get("/questions", adminController.getQuestions);

module.exports = router;
