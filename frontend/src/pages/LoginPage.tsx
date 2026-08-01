import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [senha, setSenha] = useState("");

    const [erro, setErro] = useState("");

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        try {

            await login({
                email,
                senha,
            });

            navigate("/dashboard");

        } catch (err) {
            console.error("Erro no login:", err);
            setErro("E-mail ou senha inválidos");

        }

    }

    return (
        <div style={{ padding: 20 }}>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Entrar
                </button>

            </form>

            {erro && (
                <p style={{ color: "red" }}>
                    {erro}
                </p>
            )}

            <br />

            <Link to="/cadastro">
                Criar conta
            </Link>

        </div>
    );
}