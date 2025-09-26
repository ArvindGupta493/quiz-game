// const Question = require("../models/Question");

// // Render admin dashboard
// exports.getDashboard = (req, res) => {
//   res.render("admin/dashboard", {
//     user: {
//       initials: "SG",
//       name: "Swaraj Gupta",
//       role: "Administrator",
//     },
//   });
// };

// // Render add quiz page
// exports.getAddQuiz = (req, res) => {
//   res.render("admin/addQuiz", {
//     user: {
//       initials: "SG",
//       name: "Swaraj Gupta",
//       role: "Administrator",
//     },
//   });
// };

// // Save new quiz question
// exports.postAddQuiz = async (req, res) => {
//   const { quizTitle, optionA, optionB, optionC, optionD, correctAnswer } = req.body;

//   const newQuestion = new Question({
//     question: quizTitle,
//     options: [optionA, optionB, optionC, optionD],
//     correctAnswer: correctAnswer
//   });

//   try {
//     await newQuestion.save();
//     res.redirect("/admin");
//   } catch (error) {
//     console.error(error);
//     res.render("admin/addQuiz", {
//       user: {
//         initials: "SG",
//         name: "Swaraj Gupta",
//         role: "Administrator",
//       },
//       error: "Failed to create quiz question",
//     });
//   }
// };

// // Render settings page
// exports.getSettings = (req, res) => {
//   res.render("admin/settings", {
//     user: {
//       initials: "SG",
//       name: "Swaraj Gupta",
//       role: "Administrator",
//     },
//   });
// };

const Question = require("../models/Question");

exports.dashboard = (req, res) => {
  res.render("admin/index");
};

exports.settings = (req, res) => {
  res.render("admin/admin-settings");
};

// Render add question page
exports.getAddQuestion = async (req, res) => {
  const questions = await Question.find().sort({ _id: -1 });
  // console.log(questions);
  res.render("admin/addquiz", { questions });
};

// Save new question
exports.postAddQuestion = async (req, res) => {
  const { question, option1, option2, option3, option4, correctAnswer } =
    req.body;
  const options = { option1, option2, option3, option4 };
  const correctValue = options[correctAnswer];

  console.log(question, option1, option2, option3, option4, correctValue);

  const newQ = new Question({
    question,
    options: [option1, option2, option3, option4],
    correctAnswer: correctValue,
  });

  await newQ.save();
  res.redirect("/admin/add-question");
};

// List questions
exports.getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.render("admin/listQuestions", { questions });
};
