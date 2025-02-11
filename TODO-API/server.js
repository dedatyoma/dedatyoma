require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

const uri = process.env.MONGO_URI; 
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connect();

const corsOptions = {
  origin: 'http://localhost:27017', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true, 
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send("<h1>Hello, welcome to the API!</h1>");
});

app.get('/users', (req, res) => {
  res.json({ message: 'Отримано список користувачів' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер слухає на порті ${PORT}`);
});

