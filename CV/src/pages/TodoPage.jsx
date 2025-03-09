import React, { useState } from "react";
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        TODO-список
      </Typography>
      <TextField
        label="Нова задача"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={addTask} sx={{ mb: 2 }}>
        Додати
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <Checkbox checked={task.completed} onChange={() => toggleTask(index)} />
            <ListItemText primary={task.text} sx={{ textDecoration: task.completed ? "line-through" : "none" }} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Todo;
