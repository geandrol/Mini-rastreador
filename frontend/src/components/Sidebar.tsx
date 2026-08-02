import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {

  const location = useLocation();

  const linkClass = (path: string) =>
    `block px-4 py-3 rounded-lg mb-1 font-medium text-sm transition-colors ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <aside className="w-60 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
        Menu
      </h3>

      <Link to="/dashboard" className={linkClass("/dashboard")}>
        Dashboard
      </Link>

      <Link to="/pedidos" className={linkClass("/pedidos")}>
        Pedidos
      </Link>
    </aside>
  );
}