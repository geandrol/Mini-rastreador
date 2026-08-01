import type { EnderecoEntrega } from "./EnderecoEntrega";
import type { ItemPedido } from "./ItemPedido";
import { StatusPedido } from "./StatusPedido";
import type { Usuario } from "./Usuario";

export interface Pedido {
  id?: number;
  dataPedido?: string;
  status?: StatusPedido;
  cliente: Usuario;
  enderecoEntrega: EnderecoEntrega;
  itens: ItemPedido[];
}