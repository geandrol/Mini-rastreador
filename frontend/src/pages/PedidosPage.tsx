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

  const [buscaId, setBuscaId] = useState("");
  const [pedidoBuscado, setPedidoBuscado] = useState<Pedido | null>(null);
  const [buscando, setBuscando] = useState(false);
  const [erroBusca, setErroBusca] = useState("");

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

    if (pedidoBuscado?.id === id) {
      setPedidoBuscado((prev) => (prev ? { ...prev, status } : prev));
    }

    try {
      await pedidoService.atualizarStatus(id, status);
    } catch (err) {
      setErro("Erro ao atualizar status do pedido");
      const data = await pedidoService.listar();
      setPedidos(data);
    }
  }

  async function handleBuscarPorId(e: React.FormEvent) {
    e.preventDefault();

    if (!buscaId.trim()) return;

    setErroBusca("");
    setBuscando(true);
    setPedidoBuscado(null);

    try {
      const data = await pedidoService.buscarPorId(Number(buscaId));
      setPedidoBuscado(data);
    } catch (err) {
      setErroBusca(`Pedido #${buscaId} não encontrado`);
    } finally {
      setBuscando(false);
    }
  }

  function limparBusca() {
    setBuscaId("");
    setPedidoBuscado(null);
    setErroBusca("");
  }

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Pedidos</h1>

      <form onSubmit={handleBuscarPorId} className="flex gap-2 mb-6">
        
        <input
          type="number"
          min="1"
          placeholder="Buscar pedido por ID..."
          value={buscaId}
          onChange={(e) => setBuscaId(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={buscando || !buscaId.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          {buscando ? "Buscando..." : "Buscar"}
        </button>
        {(pedidoBuscado || erroBusca) && (
          <button
            type="button"
            onClick={limparBusca}
            className="text-sm text-gray-500 hover:text-gray-700 px-3 py-2 rounded-lg transition-colors"
          >
            Limpar
          </button>
        )}
      </form>

      {erroBusca && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
          {erroBusca}
        </p>
      )}

      {erro && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
          {erro}
        </p>
      )}

      {pedidoBuscado ? (
        <>
          <p className="text-sm text-gray-500 mb-3">Resultado da busca:</p>
          <PedidoCard
            pedido={pedidoBuscado}
            onStatusChange={handleStatusChange}
          />
        </>
      ) : (
        <>
          {loading && (
            <p className="text-sm text-gray-500">Carregando...</p>
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
        </>
      )}
    </Layout>
  );
}