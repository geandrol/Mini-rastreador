import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Mini Rastreador</h2>

      <button
        onClick={handleLogout}
        className="text-sm font-medium text-gray-600 hover:text-red-600 border border-gray-300 hover:border-red-300 rounded-lg px-4 py-2 transition-colors"
      >
        Sair
      </button>
    </header>
  );
}