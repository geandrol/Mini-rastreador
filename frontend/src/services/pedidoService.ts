import type { Pedido } from "../model/Pedido";
import type { PedidoCadastro } from "../model/PedidoCadastro";
import type { StatusPedido } from "../model/StatusPedido";
import api from "./api";

class PedidoService {

  async listar(): Promise<Pedido[]> {
    const response = await api.get<Pedido[]>("/pedidos");
    return response.data;
  }

  async buscarPorId(id: number): Promise<Pedido> {
    const response = await api.get<Pedido>(`/pedidos/${id}`);
    return response.data;
  }

  async criar(dados: PedidoCadastro): Promise<Pedido> {
    const response = await api.post<Pedido>("/pedidos/cadastro", dados);
    return response.data;
  }

  async atualizarStatus(
    id: number,
    status: StatusPedido
  ): Promise<Pedido> {

    const response = await api.put<Pedido>(
      `/pedidos/${id}/status?status=${status}`
    );

    return response.data;
  }

}

export default new PedidoService();