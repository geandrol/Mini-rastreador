import { useEffect, useState } from "react";
import pedidoService from "../services/pedidoService";
import clienteService from "../services/clienteService";
import type { PedidoCadastro } from "../model/PedidoCadastro";
import type { ItemDisponivel } from "../model/ItemDisponivel";

import Layout from "../components/Layout";
import ItemService from "../services/ItemService";



export default function NovoPedidoPage() {

  const [itensDisponiveis, setItensDisponiveis] = useState<ItemDisponivel[]>([]);
  const [selecionados, setSelecionados] = useState<Record<number, number>>({});
  const [nomeCliente, setNomeCliente] = useState("");

  const [endereco, setEndereco] = useState({
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    complemento: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    carregarItens();
  }, []);

  async function carregarItens() {
    try {
      const dados = await ItemService.listar();
      setItensDisponiveis(dados);
    } catch (err) {
      setMensagem("Erro ao carregar itens disponíveis");
    }
  }

  function alternarSelecao(id: number, marcado: boolean) {
    setSelecionados((prev) => {
      const novo = { ...prev };
      if (marcado) {
        novo[id] = 1;
      } else {
        delete novo[id];
      }
      return novo;
    });
  }

  function atualizarQuantidade(id: number, quantidade: number) {
    setSelecionados((prev) => ({ ...prev, [id]: quantidade }));
  }

  function atualizarEndereco(campo: string, valor: string) {
    setEndereco({ ...endereco, [campo]: valor });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nomeCliente.trim()) {
      setMensagem("Informe o nome do cliente");
      return;
    }

    const itensSelecionados = Object.entries(selecionados).map(
      ([itemId, quantidade]) => ({ itemId: Number(itemId), quantidade })
    );

    if (itensSelecionados.length === 0) {
      setMensagem("Selecione ao menos um item");
      return;
    }

    const algumInvalido = itensSelecionados.some((i) => i.quantidade < 1);
    if (algumInvalido) {
      setMensagem("Quantidade precisa ser maior que zero");
      return;
    }

    setEnviando(true);

    try {
      const cliente = await clienteService.cadastrar({ nome: nomeCliente });

      const pedido: PedidoCadastro = {
        clienteId: cliente.id,
        itens: itensSelecionados,
        enderecoEntrega: endereco,
      };

      await pedidoService.criar(pedido);

      setMensagem("Pedido criado com sucesso!");
      setNomeCliente("");
      setSelecionados({});
      setEndereco({ rua: "", numero: "", bairro: "", cidade: "", complemento: "" });
    } catch (err) {
      setMensagem("Erro ao criar pedido");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Novo Pedido</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">

        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Cliente</h2>

          <input
            placeholder="Nome do cliente"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </section>

        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Itens disponíveis</h2>

          {itensDisponiveis.length === 0 && (
            <p className="text-sm text-gray-500">Nenhum item cadastrado.</p>
          )}

          <div className="space-y-2">
            {itensDisponiveis.map((item) => {
              const marcado = item.id in selecionados;

              return (
                <label
                  key={item.id}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                    marcado ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={marcado}
                    onChange={(e) => alternarSelecao(item.id, e.target.checked)}
                    className="w-4 h-4 accent-blue-600"
                  />

                  <span className="flex-1 text-sm text-gray-700">
                    {item.produto} <span className="text-gray-400">— R$ {item.preco.toFixed(2)}</span>
                  </span>

                  {marcado && (
                    <input
                      type="number"
                      min={1}
                      value={selecionados[item.id]}
                      onClick={(e) => e.preventDefault()}
                      onChange={(e) => atualizarQuantidade(item.id, Number(e.target.value))}
                      className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </label>
              );
            })}
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Endereço de Entrega</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Rua"
              value={endereco.rua}
              onChange={(e) => atualizarEndereco("rua", e.target.value)}
              className="col-span-2 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
              placeholder="Número"
              value={endereco.numero}
              onChange={(e) => atualizarEndereco("numero", e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
              placeholder="Bairro"
              value={endereco.bairro}
              onChange={(e) => atualizarEndereco("bairro", e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
              placeholder="Cidade"
              value={endereco.cidade}
              onChange={(e) => atualizarEndereco("cidade", e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
              placeholder="Complemento"
              value={endereco.complemento}
              onChange={(e) => atualizarEndereco("complemento", e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </section>

        <button
          type="submit"
          disabled={enviando}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
        >
          {enviando ? "Criando..." : "Criar Pedido"}
        </button>

      </form>

      {mensagem && (
        <p className="text-sm text-gray-700 bg-white border border-gray-200 rounded-lg px-4 py-3 mt-4 max-w-2xl">
          {mensagem}
        </p>
      )}
    </Layout>
  );
}