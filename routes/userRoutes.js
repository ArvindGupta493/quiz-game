const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Home page
router.get("/", userController.getHome);

// Separate routes for each page
router.get("/wallet", userController.getWallet);
router.get("/leaderboard", userController.getLeaderboard);
router.get("/redeem", userController.getRedeem);
router.get("/history", userController.getHistory);
router.get("/game-view", userController.getGameView);
router.get("/gift", userController.getGift);
router.get("/quiz", userController.getQuiz);
router.get("/result", userController.getResult);
router.get("/settings", userController.getSettings);

// Quiz routes
router.get("/quiz-home", userController.quiz);
router.get("/start-quiz", userController.startQuiz);
router.post("/submit-answer", userController.submitAnswer);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userController");

// router.get("/", userController.getHome);
// router.post("/start", userController.startQuiz);
// router.post("/answer", userController.submitAnswer);

// module.exports = router;
