import type { LoginRequest } from "../model/LoginRequest";
import type { LoginResponse } from "../model/LoginResponse";
import type { Usuario } from "../model/Usuario";
import api from "./api";


class AuthService {

  async cadastrar(usuario: Usuario): Promise<Usuario> {
    const response = await api.post<Usuario>(
      "/usuarios/cadastro",
      usuario
    );

    return response.data;
  }

  async login(login: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>(
      "/usuarios/login",
      login
    );

    return response.data;
  }

  async listar(): Promise<Usuario[]> {
    const response = await api.get<Usuario[]>("/usuarios");
    return response.data;
  }

  logout() {
    localStorage.removeItem("token");
  }

}

export default new AuthService();
