const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

const Todo = mongoose.model('Todo', new mongoose.Schema({
    description: String,
    checked: Boolean
}));

app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: "Помилка завантаження завдань" });
    }
});

app.post('/todos', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ error: "Помилка створення завдання" });
    }
});

app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndUpdate(id, req.body);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ error: "Помилка оновлення завдання" });
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ error: "Помилка видалення завдання" });
    }
});

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
