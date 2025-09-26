const Question = require("../models/Question");

let userAnswers = {}; // temporary (can be stored in DB)

// Render home page
exports.getHome = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  res.render("user/index", { user });
};

// Wallet page
exports.getWallet = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  let wallet = {
    balance: 12450,
    usdEquivalent: 124.5,
  };
  let transactions = [
    {
      date: "Sep 23, 2025",
      type: "deposit",
      description: "Added funds",
      amount: 500,
      status: "completed",
    },
    {
      date: "Sep 22, 2025",
      type: "purchase",
      description: "Puzzle Ladder - Premium Pass",
      amount: 150,
      status: "completed",
    },
  ];
  res.render("user/wallet", { user, wallet, transactions });
};

// History page
exports.getHistory = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  res.render("user/history", { user });
};

// Game view page
exports.getGameView = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  res.render("user/game-view", { user });
};

exports.getLeaderboard = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  res.render("user/leaderboard", { user });
};

exports.getRedeem = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  res.render("user/redeem", { user });
};

// Gift page
exports.getGift = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  res.render("user/gift", { user });
};

// Settings page
exports.getSettings = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  res.render("user/settings", { user });
};
// Quiz page (before starting quiz)
exports.getQuiz = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  res.render("user/quiz-start", { user });
};

// Result page (after finishing quiz)
exports.getResult = (req, res) => {
  let user = {
    initials: "SG",
    name: "Swaraj Gupta",
    role: "Player",
  };
  res.render("user/result", { user });
};

exports.quiz = async (req, res) => {
  res.render("user/home");
};

// Start quiz
exports.startQuiz = async (req, res) => {
  const username = "Swara Gupta";
  const questions = await Question.find();

  // console.log(questions);

  userAnswers[username] = { answers: [], score: 0 };

  res.render("user/quiz", { username, questions, index: 0 });
};

// Submit answer
exports.submitAnswer = async (req, res) => {
  const { username, index, answer } = req.body;
  const questions = await Question.find();
  const question = questions[index];

  if (answer === question.correctAnswer) {
    userAnswers[username].score++;
  }

  userAnswers[username].answers.push(answer);

  if (parseInt(index) + 1 < questions.length) {
    res.render("user/quiz", {
      username,
      questions,
      index: parseInt(index) + 1,
    });
  } else {
    res.render("user/result", {
      username,
      score: userAnswers[username].score,
      total: questions.length,
    });
  }
};

// const Question = require("../models/Question");

// let userAnswers = {}; // temporary (can be stored in DB)

// exports.getHome = (req, res) => {
//   let user = {
//     initials: "SG",
//     name: "Swaraj Gupta",
//     role: "Player",
//   };
//   res.render("user/index", { user });
// //   res.render("user/history");
// //   res.render("user/game-view");
// //   res.render("user/gift");
// //   res.render("user/quiz");
// //   res.render("user/result");
// //   res.render("user/settings");
// //   res.render("user/wallet");
// };

// exports.startQuiz = async (req, res) => {
//   const username = req.body.username;
//   const questions = await Question.find();

//   userAnswers[username] = { answers: [], score: 0 };

//   res.render("user/quiz", { username, questions, index: 0 });
// };

// exports.submitAnswer = async (req, res) => {
//   const { username, index, answer } = req.body;
//   const questions = await Question.find();
//   const question = questions[index];

//   if (answer === question.correctAnswer) {
//     userAnswers[username].score++;
//   }

//   userAnswers[username].answers.push(answer);

//   if (parseInt(index) + 1 < questions.length) {
//     res.render("user/quiz", {
//       username,
//       questions,
//       index: parseInt(index) + 1,
//     });
//   } else {
//     res.render("user/result", {
//       username,
//       score: userAnswers[username].score,
//       total: questions.length,
//     });
//   }
// };
