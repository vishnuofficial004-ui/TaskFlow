import api from "../services/api";

export default function TaskList({ tasks, onChange }) {
  const toggleStatus = async (task) => {
    await api.put(`/tasks/${task.id}`, {
      status: task.status === "pending" ? "completed" : "pending"
    });
    onChange();
  };

  const deleteTask = async (id) => {
  try {
    await api.delete(`/tasks/${id}`);
    onChange();
  } catch {
    alert("Failed to delete task");
  }
};


  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "10px" }}>
          <strong>{task.title}</strong> – {task.status}
          <br />
          {task.description}

          <br />
          <button onClick={() => toggleStatus(task)}>
            Toggle Status
          </button>
          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
