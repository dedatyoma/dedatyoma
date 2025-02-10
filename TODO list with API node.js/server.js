require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://allowed-domain.com', 
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

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер слухає на порті ${PORT}`);
});
