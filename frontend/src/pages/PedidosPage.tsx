import { useEffect, useState } from "react";
import pedidoService from "../services/pedidoService";
import type { Pedido } from "../model/Pedido";
import { StatusPedido } from "../model/StatusPedido";
import Layout from "../components/Layout";
import PedidoCard from "../components/PedidoCard";

export default function PedidosPage() {

  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {

    async function carregarPedidos() {
      try {
        const data = await pedidoService.listar();
        setPedidos(data);
      } catch (err) {
        setErro("Erro ao carregar pedidos");
      } finally {
        setLoading(false);
      }
    }

    carregarPedidos();

  }, []);

  async function handleStatusChange(id: number, status: StatusPedido) {

    setPedidos((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));

    try {
      await pedidoService.atualizarStatus(id, status);
    } catch (err) {
      setErro("Erro ao atualizar status do pedido");
      const data = await pedidoService.listar();
      setPedidos(data);
    }
  }

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Pedidos</h1>

      {loading && (
        <p className="text-sm text-gray-500">Carregando...</p>
      )}

      {erro && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
          {erro}
        </p>
      )}

      {!loading && pedidos.length === 0 && (
        <p className="text-sm text-gray-500">Nenhum pedido encontrado.</p>
      )}

      {pedidos.map((pedido) => (
        <PedidoCard
          key={pedido.id}
          pedido={pedido}
          onStatusChange={handleStatusChange}
        />
      ))}
    </Layout>
  );
}