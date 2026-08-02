import type { ItemDisponivel } from "../model/ItemDisponivel";
import api from "./api";

class ItemService {
  async listar(): Promise<ItemDisponivel[]> {
    const response = await api.get<ItemDisponivel[]>("/itens");
    return response.data;
  }
}

export default new ItemService();