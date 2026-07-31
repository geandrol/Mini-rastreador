<div align="center">

# 🚚 Mini Rastreador de Pedidos

### API REST para gerenciamento de pedidos de delivery

*Cadastro de usuários, autenticação, criação e acompanhamento de pedidos com atualização de status em tempo real.*

</div>

---

Projeto desenvolvido como **desafio técnico** utilizando **Java + Spring Boot**, seguindo boas práticas de organização em camadas (Controller → Service → Repository → Model/DTO).

<br>

## 📌 Índice

- [Funcionalidades](#-funcionalidades)
- [Fluxo de status do pedido](#-fluxo-de-status-do-pedido)
- [Arquitetura](#️-arquitetura-do-projeto)
- [Tecnologias](#️-tecnologias-utilizadas)
- [Modelo de dados](#️-modelo-de-dados)
- [Configuração e execução](#️-configuração-do-projeto)
- [Endpoints da API](#-endpoints)
- [Segurança](#-segurança)
- [Próximas melhorias](#-próximas-melhorias)
- [Autor](#-autor)

<br>

## 📌 Funcionalidades

### 👤 Usuários

| Funcionalidade | Descrição |
|---|---|
| Cadastro | Criação de usuário com validação de e-mail duplicado |
| Login | Autenticação via e-mail e senha |
| Segurança | Senhas criptografadas com **BCrypt** |

### 📦 Pedidos

| Funcionalidade | Descrição |
|---|---|
| Criar pedido | Associa cliente, itens e endereço de entrega |
| Listar pedidos | Retorna todos os pedidos cadastrados |
| Buscar por ID | Consulta detalhada de um pedido específico |
| Atualizar status | Avança o pedido no fluxo de entrega |

<br>

## 🚦 Fluxo de status do pedido

```mermaid
flowchart LR
    A[RECEBIDO] --> B[EM_PREPARO]
    B --> C[SAIU_PARA_ENTREGA]
    C --> D[ENTREGUE]
    A --> E[CANCELADO]
```

<br>

## 🏗️ Arquitetura do Projeto

Organização em camadas, seguindo o padrão do Spring Boot:

```text
src/main/java/com/geandro/rastreador
│
├── 🎮 controller     → Endpoints REST
├── ⚙️ service        → Regras de negócio
├── 🗄️ repository     → Comunicação com o banco de dados
├── 🧩 model          → Entidades JPA
├── 📦 dto            → Objetos de transferência de dados
└── 🔐 security       → Configurações de autenticação
```

<br>

## 🛠️ Tecnologias utilizadas

<table>
<tr>
<td valign="top" width="33%">

**Backend**
- Java 17+
- Spring Boot 3
- Spring Web
- Spring Data JPA
- Spring Security
- Hibernate
- Maven

</td>
<td valign="top" width="33%">

**Banco de Dados**
- MySQL

</td>
<td valign="top" width="33%">

**Ferramentas**
- Spring Tool Suite (STS)
- Eclipse
- Postman
- Git / GitHub

</td>
</tr>
</table>

<br>

## 🗄️ Modelo de Dados

<details>
<summary><strong>👤 Usuario</strong></summary>

| Campo | Tipo |
|---|---|
| id | Long |
| nome | String |
| email | String |
| senha | String |

</details>

<details>
<summary><strong>📦 Pedido</strong></summary>

| Campo | Tipo |
|---|---|
| id | Long |
| dataPedido | LocalDateTime |
| status | Enum |
| cliente | Usuario |
| enderecoEntrega | EnderecoEntrega |
| itens | List\<ItemPedido\> |

</details>

<details>
<summary><strong>🛒 ItemPedido</strong></summary>

| Campo | Tipo |
|---|---|
| id | Long |
| produto | String |
| quantidade | Integer |
| preco | BigDecimal |
| pedido | Pedido |

> ℹ️ Os itens já existem pré-cadastrados no banco. Ao criar um pedido, o cliente seleciona apenas os **IDs** dos itens desejados (`itensIds`).

</details>

<details>
<summary><strong>📍 EnderecoEntrega</strong></summary>

| Campo | Tipo |
|---|---|
| id | Long |
| rua | String |
| numero | String |
| bairro | String |
| cidade | String |
| complemento | String |

</details>

<br>

## ⚙️ Configuração do Projeto

### ✅ Pré-requisitos

- Java 17+
- Maven
- MySQL

### 🗃️ 1. Criar o banco de dados

```sql
CREATE DATABASE pedidos_db;
```

### 🔧 2. Configurar `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/pedidos_db
spring.datasource.username=root
spring.datasource.password=SUA_SENHA

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### ▶️ 3. Clonar e executar

```bash
git clone https://github.com/seuusuario/rastreador.git
cd backend
mvn spring-boot:run
```

A API estará disponível em:

```text
http://localhost:8080
```

<br>

## 🔌 Endpoints

### 👤 Usuários

<details>
<summary><strong>POST</strong> /usuarios/cadastro — Cadastrar usuário</summary>

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456"
}
```

</details>

<details>
<summary><strong>POST</strong> /usuarios/login — Autenticar usuário</summary>

```json
{
  "email": "joao@email.com",
  "senha": "123456"
}
```

</details>

### 📦 Pedidos

<details>
<summary><strong>POST</strong> /pedidos — Criar pedido</summary>

Os itens já são pré-cadastrados no banco de dados. O cliente informa apenas os **IDs** dos itens desejados (`itensIds`), e o backend busca e vincula cada um ao pedido.

```json
{
  "clienteId": 1,
  "itensIds": [1, 2],
  "enderecoEntrega": {
    "rua": "Rua A",
    "numero": "100",
    "bairro": "Centro",
    "cidade": "São Paulo",
    "complemento": "Apto 12"
  }
}
```

> ⚠️ Se algum ID informado não existir, a requisição retorna erro informando qual item não foi encontrado.

</details>

<details>
<summary><strong>GET</strong> /pedidos — Listar todos os pedidos</summary>

```http
GET /pedidos
```

</details>

<details>
<summary><strong>GET</strong> /pedidos/{id} — Buscar pedido por ID</summary>

```http
GET /pedidos/1
```

</details>

<details>
<summary><strong>PUT</strong> /pedidos/{id}/status — Atualizar status do pedido</summary>

```http
PUT /pedidos/1/status?status=EM_PREPARO
```

</details>

<br>

## 🔐 Segurança

### 🔑 Autenticação via JWT

A API utiliza **JSON Web Token (JWT)** para autenticação stateless:

- Rotas públicas: `/usuarios/cadastro`, `/usuarios/login`, endpoints do Swagger
- Todas as demais rotas exigem o header `Authorization: Bearer <token>`
- Um filtro (`JwtAuthenticationFilter`) intercepta as requisições, valida o token e popula o contexto de segurança do Spring
- Sessões são **stateless** (`SessionCreationPolicy.STATELESS`) — nenhum estado de sessão é mantido no servidor

### 🔒 Senhas

As senhas dos usuários **nunca** são armazenadas em texto puro. O sistema utiliza `BCryptPasswordEncoder` para criptografia.

| Senha enviada | Armazenada (hash) |
|---|---|
| `123456` | `$2a$10$7x8sK......` |

Além disso, o campo `senha` é anotado com `@JsonIgnore` na entidade `Usuario`, garantindo que o hash **nunca** seja exposto em nenhuma resposta da API, mesmo quando o usuário aparece aninhado dentro de outro objeto (como `cliente` dentro de um `Pedido`).

### 🔁 Prevenção de recursão infinita no JSON

Como `Pedido` e `ItemPedido` possuem uma relação bidirecional (`@OneToMany` / `@ManyToOne`), a referência de volta (`ItemPedido.pedido`) é anotada com `@JsonIgnore` para evitar loop infinito de serialização ao retornar um pedido com seus itens.

<br>

## 📚 Próximas melhorias

- [x] Implementação de JWT Token
- [ ] Controle de acesso por usuário autenticado (roles/permissões)
- [x] Swagger / OpenAPI
- [ ] Tratamento global de exceções
- [ ] Paginação de pedidos
- [ ] Testes unitários
- [ ] Dockerização da aplicação
- [x] Deploy em cloud

<br>

## 👨‍💻 Autor

<div align="center">

**Geandro Araujo**

Projeto desenvolvido para estudo e demonstração de conhecimentos em desenvolvimento Backend Java.

</div>
