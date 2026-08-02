import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            await login({ email, senha });
            navigate("/dashboard");
        } catch (err) {
            console.error("Erro no login:", err);
            setErro("E-mail ou senha inválidos");
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 w-full max-w-sm">

                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
                    >
                        Entrar
                    </button>
                </form>

                {erro && (
                    <p className="text-red-600 text-sm mt-4">{erro}</p>
                )}

                <Link to="/cadastro" className="block text-center text-sm text-blue-600 hover:text-blue-700 font-medium mt-6">
                    Criar conta
                </Link>
            </div>
        </div>
    );
}