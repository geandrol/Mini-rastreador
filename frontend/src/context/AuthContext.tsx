import { createContext, useEffect, useState, type PropsWithChildren, } from "react";
import authService from "../services/authService";
import type { LoginRequest } from "../model/LoginRequest";

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (dados: LoginRequest) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: PropsWithChildren) {

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");

    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  async function login(dados: LoginRequest) {
    const response = await authService.login(dados);

    localStorage.setItem("token", response.token);

    setToken(response.token);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}