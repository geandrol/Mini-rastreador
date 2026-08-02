# 🚚 Mini Rastreador de Pedidos — Frontend

Interface web do sistema **Mini Rastreador de Pedidos**, desenvolvida em **React + Vite + TypeScript**, responsável pela autenticação de usuários, gerenciamento de sessão com **JWT** e consumo da API REST do backend para cadastro e acompanhamento de pedidos.

Este projeto foi desenvolvido como parte de um desafio técnico com foco em **arquitetura em camadas, integração frontend/backend e boas práticas de desenvolvimento**.

---

## ✨ Funcionalidades

### 👤 Autenticação

* Login com e-mail e senha
* Cadastro de usuários
* Armazenamento do **JWT** em `localStorage`
* Rotas protegidas
* Logout da sessão

### 📦 Pedidos

* Listagem de pedidos
* Criação de novos pedidos
* Múltiplos itens por pedido
* Endereço completo de entrega
* Atualização de status (integrado ao backend)

### 🎨 Interface

* React + Vite
* TypeScript
* Tailwind CSS
* Estrutura modular e reutilizável
* Preparado para expansão (dashboard, filtros, paginação, etc.)

---

# 🏗️ Arquitetura do Projeto

O frontend segue uma arquitetura baseada em separação de responsabilidades.

```text
src
├── components
│   ├── layout
│   ├── pedido
│   └── ui
│
├── context
│   └── AuthContext.tsx
│
├── hooks
│
├── model
│   ├── Usuario.ts
│   ├── Pedido.ts
│   ├── ItemPedido.ts
│   ├── EnderecoEntrega.ts
│   └── StatusPedido.ts
│
├── pages
│   ├── LoginPage.tsx
│   ├── CadastroPage.tsx
│   ├── DashboardPage.tsx
│   ├── PedidosPage.tsx
│   └── NovoPedidoPage.tsx
│
├── routes
│   └── PrivateRoute.tsx
│
├── services
│   ├── api.ts
│   ├── authService.ts
│   └── pedidoService.ts
│
├── App.tsx
└── main.tsx
```

---

# 🛠️ Tecnologias Utilizadas

## Frontend

* React 18
* Vite
* TypeScript
* React Router DOM
* Axios
* Tailwind CSS

## Integração

* JWT (JSON Web Token)
* API REST Spring Boot

---

# 🔗 Backend

O frontend consome a API hospedada em Render.

**API Base URL**

```text
https://mini-rastreador.onrender.com
```

Documentação Swagger:

```text
https://mini-rastreador.onrender.com/swagger-ui/index.html
```

---

# 🔐 Autenticação JWT

Após o login, o backend retorna um token JWT.

Exemplo:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

O token é armazenado em `localStorage` e enviado automaticamente em todas as requisições protegidas através do interceptor do Axios.

```text
Authorization: Bearer TOKEN
```

---

# ⚙️ Configuração do Projeto

## Pré-requisitos

* Node.js 18+
* npm ou yarn

---

# 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/geandrol/Mini-rastreador.git
```

Acesse a pasta do frontend:

```bash
cd Mini-rastreador/frontend
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em:

```text
http://localhost:5173
```

---

# 🌍 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto.

```env
VITE_API_URL=https://mini-rastreador.onrender.com
```

---

# 🔌 Endpoints Consumidos

## Usuários

### Cadastro

```http
POST /usuarios/cadastro
```

### Login

```http
POST /usuarios/login
```

### Listagem

```http
GET /usuarios
```

---

## Pedidos

### Listar pedidos

```http
GET /pedidos
```

### Buscar pedido

```http
GET /pedidos/{id}
```

### Criar pedido

```http
POST /pedidos
```

### Atualizar status

```http
PUT /pedidos/{id}/status
```

---

# 📋 Fluxo da Aplicação

```text
Login
   |
   v
JWT recebido
   |
   v
localStorage
   |
   v
Axios Interceptor
   |
   v
Endpoints protegidos
   |
   v
Pedidos / Dashboard
```

---

# 🚀 Próximas Melhorias

* [ ] Dashboard com métricas
* [ ] Filtro por status do pedido
* [ ] Busca por cliente
* [ ] Paginação
* [ ] Toasts de notificação
* [ ] Responsividade mobile completa
* [ ] Testes com React Testing Library
* [x] Deploy no Vercel

---

# 👨‍💻 Autor

**Geandro Araujo**

Projeto desenvolvido para estudo, portfólio e demonstração de conhecimentos em **React, TypeScript, Vite, Tailwind CSS, autenticação JWT e integração com APIs REST**.

---

⭐ Se este projeto foi útil, deixe uma estrela no repositório!
