<div align="center">

# 🚚 Mini Rastreador de Pedidos

### Sistema Full Stack para gerenciamento e rastreamento de pedidos de delivery

Aplicação desenvolvida como desafio técnico utilizando **Java + Spring Boot** no Backend e **React + TypeScript** no Frontend, com autenticação JWT, documentação OpenAPI/Swagger e deploy em cloud.

<p>

![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?logo=springboot)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![JWT](https://img.shields.io/badge/Auth-JWT-success)
![Swagger](https://img.shields.io/badge/API-Swagger-85EA2D?logo=swagger)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql)

</p>

</div>

---

# 📖 Sobre o Projeto

O **Mini Rastreador de Pedidos** é uma aplicação Full Stack desenvolvida para controlar o ciclo completo de pedidos de delivery.

O sistema permite que usuários autenticados realizem pedidos, acompanhem seu andamento e consultem todas as informações através de uma interface web integrada a uma API REST.

O projeto foi desenvolvido utilizando boas práticas de arquitetura em camadas, autenticação JWT, documentação da API com Swagger e persistência de dados utilizando MySQL.

---

# ✨ Funcionalidades

## 👤 Usuários

- Cadastro de usuários
- Login
- Senhas criptografadas com BCrypt
- Autenticação utilizando JWT
- Rotas protegidas pelo Spring Security

---

## 📦 Pedidos

- Cadastro de pedidos
- Associação de cliente ao pedido
- Associação de endereço de entrega
- Associação de produtos
- Consulta por ID
- Listagem de pedidos
- Atualização do status do pedido
- Rastreamento completo do fluxo da entrega

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

# 🏗 Arquitetura

```
                React + TypeScript
                        │
                        │ Axios
                        ▼
              Spring Boot REST API
                        │
      ┌─────────────────┼─────────────────┐
      │                 │                 │
 Controller         Service         Security JWT
      │                 │
      ▼                 ▼
 Repository       Regras de Negócio
      │
      ▼
     MySQL
```

---

# 📂 Estrutura do Projeto

## Backend

```
src/main/java/com/geandro/rastreador

├── config
├── controller
├── dto
├── exception
├── model
├── repository
├── security
├── service
└── util
```

## Frontend

```
src

├── components
├── context
├── model
├── pages
├── services
├── routes
└── utils
```

---

# 🗄 Modelo de Dados

## 👤 Usuario

| Campo | Tipo |
|--------|------|
| id | Long |
| nome | String |
| email | String |
| senha | String |

---

## 📍 Endereco

| Campo | Tipo |
|--------|------|
| id | Long |
| rua | String |
| numero | String |
| bairro | String |
| cidade | String |
| complemento | String |

---

## 🛒 ItemPedido

| Campo | Tipo |
|--------|------|
| id | Long |
| produto | String |
| preco | Double |

---

## 📦 Pedido

| Campo | Tipo |
|--------|------|
| id | Long |
| dataPedido | LocalDateTime |
| status | StatusPedido |
| cliente | Usuario |
| endereco | Endereco |
| itens | List<ItemPedido> |

---

# 🔐 Segurança

O sistema utiliza Spring Security juntamente com JWT.

### Funcionalidades implementadas

- Login autenticado
- Geração de JWT
- Bearer Token
- BCryptPasswordEncoder
- Rotas protegidas
- Validação automática do Token

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

---

# 📑 Documentação da API

Após iniciar o Backend:

### Swagger UI

```
http://localhost:8080/swagger-ui/index.html
```

### OpenAPI JSON

```
http://localhost:8080/v3/api-docs
```

---

# 🔌 Principais Endpoints

## Usuários

| Método | Endpoint |
|---------|----------|
| POST | /usuarios/cadastro |
| POST | /usuarios/login |

---

## Pedidos

| Método | Endpoint |
|---------|----------|
| GET | /pedidos |
| GET | /pedidos/{id} |
| POST | /pedidos |
| PUT | /pedidos/{id}/status |

---

# 🛠 Tecnologias Utilizadas

## Backend

- Java 17
- Spring Boot 3
- Spring Security
- Spring Data JPA
- Hibernate
- JWT
- BCrypt
- Maven

---

## Frontend

- React
- TypeScript
- Vite
- Axios
- React Router DOM

---

## Banco de Dados

- MySQL

---

## Ferramentas

- Git
- GitHub
- Postman
- Swagger
- VS Code
- Spring Tool Suite

---

# 🚀 Como Executar

## Clonar o projeto

```bash
git clone https://github.com/geandrol/Mini-rastreador.git
```

---

## Backend

```bash
cd backend

mvn spring-boot:run
```

---

## Banco de Dados

Criar o banco:

```sql
CREATE DATABASE pedidos_db;
```

Configurar o arquivo:

```
application.properties
```

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/pedidos_db
spring.datasource.username=root
spring.datasource.password=sua_senha

spring.jpa.hibernate.ddl-auto=update
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

# ☁ Deploy

## Backend

Aplicação publicada em ambiente Cloud.

## Frontend

Aplicação publicada na Vercel.

---

# 📌 Funcionalidades Implementadas

- ✅ Cadastro de usuários
- ✅ Login
- ✅ JWT Authentication
- ✅ BCrypt
- ✅ Spring Security
- ✅ Cadastro de pedidos
- ✅ Atualização do status
- ✅ Rastreamento de pedidos
- ✅ API REST
- ✅ React + TypeScript
- ✅ Integração Frontend/Backend
- ✅ Swagger/OpenAPI
- ✅ Deploy do Backend
- ✅ Deploy do Frontend

---

# 🔮 Próximas Melhorias

- Docker
- Docker Compose
- Testes Unitários
- Testes de Integração
- CI/CD com GitHub Actions
- Refresh Token
- Recuperação de senha
- Painel administrativo
- Dashboard de pedidos
- Upload de imagens
- Observabilidade (Actuator + Micrometer)

---

# 👨‍💻 Autor

## Geandro

**Desenvolvedor Full Stack**

Especializado em:

- Java
- Spring Boot
- React
- TypeScript
- Node.js
- SQL

### GitHub

https://github.com/geandrol

### LinkedIn

*(adicione seu perfil aqui)*

---

<div align="center">

⭐ Se este projeto foi útil para você, deixe uma estrela no repositório.

</div>
