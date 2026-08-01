import { useAuth } from "../hooks/useAuth";

export default function DashboardPage() {

  const { logout } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <p>Usuário autenticado com sucesso.</p>

      <button onClick={logout}>
        Sair
      </button>
    </div>
  );
}