import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchProfile = async () => {
    const res = await api.get("/auth/me");
    setUser(res.data);
  };

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchProfile();
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <div className="container">
        <h2>Dashboard</h2>
        <TaskForm onTaskCreated={fetchTasks} />
        <TaskList tasks={tasks} onChange={fetchTasks} />
      </div>
    </>
  );
}
