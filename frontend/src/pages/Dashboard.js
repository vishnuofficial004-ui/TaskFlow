import { useEffect, useState } from "react";
import api from "../services/api";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/auth/me")
      .then(res => setUser(res.data))
      .catch(() => {
        logout();
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="container">
      <h2>Dashboard</h2>

      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>

          <button onClick={() => {
            logout();
            navigate("/login");
          }}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
