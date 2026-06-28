# 📦 Personal Expense Tracker — Complete Lab Guide

## Folder Structure

```
Student expense tracker/
├── backend/
│   ├── models/
│   │   └── Expense.js       ← Mongoose model
│   ├── server.js            ← Express server (all routes here)
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js           ← Main React component (everything here)
    │   ├── App.css          ← Basic styling
    │   └── index.js         ← React entry point
    └── package.json
```

---

## Step 1 — Install Backend Dependencies

```bash
cd backend
npm install
```

This installs: **express**, **mongoose**, **cors**

---

## Step 2 — Install Frontend Dependencies

```bash
cd frontend
npm install
```

This installs: **react**, **react-dom**, **react-scripts**, **axios**

---

## Step 3 — Start MongoDB

Make sure MongoDB is installed and running on your machine.

```bash
mongod
```

> MongoDB runs on **port 27017** by default.  
> The database name used is: `expensetracker`

---

## Step 4 — Start the Backend Server

Open a new terminal:

```bash
cd backend
node server.js
```

You should see:
```
MongoDB connected
Server running on port 5000
```

---

## Step 5 — Start the Frontend

Open another terminal:

```bash
cd frontend
npm start
```

The React app will open at: **http://localhost:3000**

---

## API Endpoints (Backend)

| Method | Route             | Description          |
|--------|-------------------|----------------------|
| GET    | /expenses         | Get all expenses     |
| POST   | /expenses         | Add a new expense    |
| DELETE | /expenses/:id     | Delete an expense    |

---

## Expense Schema (MongoDB)

```js
{
  name:   String,   // Expense name (e.g., "Lunch")
  amount: Number    // Amount (e.g., 150)
}
```

---

## Tech Stack

| Layer     | Technology           |
|-----------|----------------------|
| Frontend  | React.js (CRA)       |
| HTTP      | Axios                |
| Backend   | Node.js + Express.js |
| Database  | MongoDB + Mongoose   |

---

## Features

- ✅ Add an expense (Name + Amount)
- ✅ View all expenses in a list
- ✅ Delete any expense
- ✅ Total amount shown at the bottom
