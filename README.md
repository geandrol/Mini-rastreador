<div align="center">

# 🚚 Mini Rastreador de Pedidos

### Sistema Full Stack para gerenciamento e rastreamento de pedidos

Aplicação desenvolvida com **Java + Spring Boot** no Backend e **React + TypeScript** no Frontend, utilizando autenticação JWT, API REST e documentação OpenAPI.

<p>

![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?logo=springboot)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![JWT](https://img.shields.io/badge/Auth-JWT-success)
![Swagger](https://img.shields.io/badge/API-OpenAPI-85EA2D?logo=swagger)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)

</p>

</div>

---

# 🌐 Demonstração

### Aplicação Online

**Frontend**

👉 https://mini-rastreador-ci6c.vercel.app/

> O primeiro acesso pode levar alguns segundos caso o backend esteja hospedado em um serviço gratuito.

---

# 📖 Sobre o Projeto

O **Mini Rastreador de Pedidos** é uma aplicação Full Stack desenvolvida para gerenciar e acompanhar pedidos de delivery.

A plataforma permite o cadastro de usuários, autenticação segura, criação de pedidos, acompanhamento do fluxo de entrega e atualização do status dos pedidos através de uma interface web integrada a uma API REST.

O projeto foi desenvolvido utilizando boas práticas de arquitetura em camadas, autenticação JWT, documentação com OpenAPI/Swagger e banco de dados relacional.

---

# ✨ Funcionalidades

## 👤 Usuários

- Cadastro de usuários
- Login
- Autenticação JWT
- Senhas criptografadas com BCrypt
- Rotas protegidas

---

## 📦 Pedidos

- Cadastro de pedidos
- Associação de cliente
- Associação de endereço de entrega
- Associação de produtos
- Consulta de pedidos
- Atualização do status
- Rastreamento do pedido

---

# 🚚 Fluxo do Pedido

```text
RECEBIDO
      │
      ▼
EM_PREPARO
      │
      ▼
SAIU_PARA_ENTREGA
      │
      ▼
ENTREGUE

└────────────► CANCELADO
```

---

# 🏗️ Arquitetura

```
React + TypeScript
        │
        │ Axios
        ▼
Spring Boot REST API
        │
 ┌──────┼──────────┐
 │      │          │
Controller Service Security
 │
 ▼
Repository
 │
 ▼
MySQL
```

---

# 📂 Estrutura do Projeto

```
Mini-rastreador
│
├── backend
│   ├── controller
│   ├── dto
│   ├── exception
│   ├── model
│   ├── repository
│   ├── security
│   └── service
│
└── frontend
    ├── components
    ├── context
    ├── model
    ├── pages
    ├── services
    └── routes
```

---

# 🛠️ Tecnologias

## Backend

- Java 17
- Spring Boot 3
- Spring Security
- Spring Data JPA
- Hibernate
- JWT
- BCrypt
- Maven

## Frontend

- React
- TypeScript
- Vite
- Axios
- React Router DOM
- Context API

## Banco de Dados

- MySQL

---

# 🔐 Segurança

A autenticação utiliza **JWT (JSON Web Token)**.

Fluxo:

```
Login

↓

JWT

↓

Bearer Token

↓

Requisições autenticadas
```

As senhas dos usuários são criptografadas utilizando **BCryptPasswordEncoder**.

---

# 📚 Documentação da API

Após iniciar o backend, a documentação pode ser acessada em:

### Swagger UI

```
http://localhost:8080/swagger-ui/index.html
```

### OpenAPI

```
http://localhost:8080/v3/api-docs
```

---

# 🚀 Como executar

## Backend

```bash
cd backend

mvn spring-boot:run
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

# 📌 Funcionalidades Implementadas

- ✅ Cadastro de usuários
- ✅ Login
- ✅ JWT Authentication
- ✅ Spring Security
- ✅ BCrypt
- ✅ Cadastro de pedidos
- ✅ Atualização do status
- ✅ Rastreamento de pedidos
- ✅ API REST
- ✅ Swagger / OpenAPI
- ✅ Integração Frontend + Backend
- ✅ Deploy na Vercel

---

# 🚀 Próximas Melhorias

- Docker
- Docker Compose
- CI/CD
- Testes Unitários
- Testes de Integração
- Dashboard administrativo
- Responsividade mobile
- Recuperação de senha
- Refresh Token

---

# 👨‍💻 Autor

**Geandro**

Desenvolvedor Full Stack

### Tecnologias

- Java
- Spring Boot
- React
- TypeScript
- Node.js
- SQL

### GitHub

https://github.com/geandrol

### LinkedIn

*(adicione o link do seu perfil)*

---

<div align="center">

⭐ Se este projeto foi útil, deixe uma estrela no repositório!

</div>
