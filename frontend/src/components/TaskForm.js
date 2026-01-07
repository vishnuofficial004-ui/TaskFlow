import { useState } from "react";
import api from "../services/api";

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await api.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    onTaskCreated();
  } catch (err) {
    alert("Failed to create task");
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Task</h3>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}
