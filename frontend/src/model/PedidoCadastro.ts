import type { EnderecoEntrega } from "./EnderecoEntrega";
import type { ItemPedidoQuantidade } from "./ItemPedidoQuantidade";

export interface PedidoCadastro {
  clienteId: number;
  itens: ItemPedidoQuantidade[];
  enderecoEntrega: EnderecoEntrega;
}