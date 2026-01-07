import api from "../services/api";

export default function TaskList({ tasks, onChange }) {

  const toggleStatus = async (task) => {
    await api.put(`/tasks/${task.id}`, {
      status: task.status === "pending" ? "completed" : "pending"
    });
    onChange();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    onChange();
  };

  return (
    <div>
      <h3>Your Tasks</h3>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>

          <button onClick={() => toggleStatus(task)}>
            Mark {task.status === "pending" ? "Completed" : "Pending"}
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
