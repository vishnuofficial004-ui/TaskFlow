import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{
      background: "#333",
      color: "#fff",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div>TaskFlow</div>
      <div>
        {user?.name} ({user?.email})
        <button
          onClick={handleLogout}
          style={{ marginLeft: "15px" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
