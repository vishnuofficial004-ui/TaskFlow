import { useEffect, useState } from "react";
import api from "../services/api";
import { logout } from "../utils/auth";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchProfile();
    fetchTasks();
  }, []);

  const fetchProfile = async () => {
    const res = await api.get("/auth/me");
    setUser(res.data);
  };

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  const handleFilter = async () => {
    const res = await api.get(`/tasks?search=${search}&status=${status}`);
    setTasks(res.data);
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      {user && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      <button onClick={handleLogout}>Logout</button>

      <hr />

      <TaskForm onTaskCreated={fetchTasks} />

      <hr />

      <h3>Tasks</h3>

      <input
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <button onClick={handleFilter}>Filter</button>

      <TaskList tasks={tasks} onChange={fetchTasks} />
    </div>
  );
}

