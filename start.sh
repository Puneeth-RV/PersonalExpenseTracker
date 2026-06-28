#!/bin/bash

echo "Starting MongoDB..."
brew services start mongodb/brew/mongodb-community
sleep 2

echo "Installing backend dependencies..."
cd backend
npm install
echo "Starting backend server..."
node server.js &
cd ..

sleep 2

echo "Installing frontend dependencies..."
cd frontend
npm install
echo "Starting frontend..."
npm start
