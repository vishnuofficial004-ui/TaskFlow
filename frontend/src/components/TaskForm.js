import { useState } from "react";
import api from "../services/api";

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitTask = async (e) => {
    e.preventDefault();
    if (!title) return;

    await api.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    onTaskCreated();
  };

  return (
    <form onSubmit={submitTask}>
      <h3>Create Task</h3>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
