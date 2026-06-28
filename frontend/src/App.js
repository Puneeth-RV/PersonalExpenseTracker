import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // Fetch all expenses when page loads
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    axios.get("http://localhost:5000/expenses").then((response) => {
      setExpenses(response.data);
    });
  };

  const addExpense = () => {
    if (name === "" || amount === "") {
      alert("Please fill in both fields");
      return;
    }
    axios
      .post("http://localhost:5000/expenses", { name, amount })
      .then(() => {
        setName("");
        setAmount("");
        fetchExpenses();
      });
  };

  const deleteExpense = (id) => {
    axios.delete(`http://localhost:5000/expenses/${id}`).then(() => {
      fetchExpenses();
    });
  };

  const totalAmount = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  return (
    <div className="container">
      <h1>Personal Expense Tracker</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>

      <h2>All Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.name} - ₹{expense.amount}
            <button onClick={() => deleteExpense(expense._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
}

export default App;
