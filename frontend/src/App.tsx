import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import CadastroPage from './pages/CadastroPage'
import DashboardPage from './pages/DashboardPage'
import { AuthProvider } from './context/AuthContext'
import PedidosPage from './pages/PedidosPage'
import NovoPedidoPage from './pages/NovoPedidoPage'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/login" element={<LoginPage />} />

            <Route path="/cadastro" element={<CadastroPage />} />

            <Route path="/dashboard" element={<DashboardPage />} />

            <Route path="*" element={<Navigate to="/login" replace />} />

            <Route path="/pedidos" element={<PedidosPage />} />

            <Route path="/pedidos/novo" element={<NovoPedidoPage />} />
          
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
