import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import CadastroPage from './pages/CadastroPage'
import DashboardPage from './pages/DashboardPage'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/login" element={<LoginPage />} />

            <Route path="/cadastro" element={<CadastroPage />} />

            <Route path="/dashboard" element={<DashboardPage />} />

            <Route path="*" element={<Navigate to="/login" replace />}
            />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
