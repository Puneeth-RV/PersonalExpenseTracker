// rmdir /s /q .git

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Expense = require("./models/Expense");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/expensetracker")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// GET all expenses
app.get("/expenses", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// POST add a new expense
app.post("/expenses", async (req, res) => {
  const { name, amount } = req.body;
  const newExpense = new Expense({ name, amount });
  await newExpense.save();
  res.json(newExpense);
});

// DELETE an expense by id
app.delete("/expenses/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
