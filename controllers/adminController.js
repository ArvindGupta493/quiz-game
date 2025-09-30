const Question = require("../models/Question");

exports.dashboard = (req, res) => {
  res.render("admin/index");
};

exports.settings = (req, res) => {
  res.render("admin/admin-settings");
};

exports.distributor = (req, res) => {
  res.render("admin/distributor-dashboard");
};

exports.vendor = (req, res) => {
  res.render("admin/vendor-dashboard");
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
