import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../services/authService";

export default function CadastroPage() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");

  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  const [carregando, setCarregando] = useState(false);

  const [erro, setErro] = useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setErro("");
    setCarregando(true);

    try {
      await authService.cadastrar({
        nome,
        email,
        senha,
      });

      navigate("/login");
    } catch (err) {
      setErro("Não foi possível cadastrar. Tente novamente.");
    } finally {
      setCarregando(false);
    }

  }

  return (
    <div style={{ padding: 20 }}>

      <h1>Cadastro</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          disabled={carregando}
        />

        <br /><br />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={carregando}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          disabled={carregando}
        />

        <br /><br />

        <button
          type="submit"
          disabled={carregando}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            opacity: carregando ? 0.7 : 1,
            cursor: carregando ? "not-allowed" : "pointer",
          }}
        >
          {carregando && (
            <span
              style={{
                width: 14,
                height: 14,
                border: "2px solid #ffffff55",
                borderTopColor: "#fff",
                borderRadius: "50%",
                display: "inline-block",
                animation: "spin 0.7s linear infinite",
              }}
            />
          )}
          {carregando ? "Cadastrando..." : "Cadastrar"}
        </button>

      </form>

      {erro && (
        <p style={{ color: "red", marginTop: 12 }}>{erro}</p>
      )}

      <br />

      <Link to="/login">
        Voltar para login
      </Link>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

    </div>
  );
}