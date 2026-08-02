import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function DashboardPage() {

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Dashboard</h1>

      <p className="text-gray-600 mb-6">Bem-vindo ao sistema de rastreamento de pedidos.</p>

      <nav className="flex gap-3">
        <Link to="/pedidos/novo">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-lg transition-colors">
            Cadastrar Pedido
          </button>
        </Link>

        <Link to="/pedidos">
          <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-2.5 rounded-lg border border-gray-300 transition-colors">
            Ver Pedidos
          </button>
        </Link>
      </nav>
    </Layout>
  );
}