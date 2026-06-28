// rmdir /s /q .git

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Expense = require("./models/Expense");

const app = express();

app.use(cors());
app.use(express.json());

// Start in-memory MongoDB and connect
async function startServer() {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
  console.log("MongoDB connected (in-memory)");
}
startServer();

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
