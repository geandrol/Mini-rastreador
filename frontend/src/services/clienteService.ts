import api from "./api";

export interface ClienteCadastro {
  nome: string;
}

export interface ClienteResposta {
  id: number;
  nome: string;
  email: string;
}

class ClienteService {
  async cadastrar(dados: ClienteCadastro): Promise<ClienteResposta> {
    const response = await api.post<ClienteResposta>("/usuarios/clientes", dados);
    return response.data;
  }
}

export default new ClienteService();