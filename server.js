const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

const app = express();
const PORT = 10031;

// Connect to DB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.use("/admin", adminRoutes);
app.use("/", userRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);


