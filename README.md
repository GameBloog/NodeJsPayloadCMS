# API Documentation

# Project Setup Instructions

## 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/GameBloog/NodeJsPayloadCMS.git
```

## 2. Navigate to the Project Directory

Enter the newly created directory:

```bash
cd NodeJsPayloadCMS
```

## 3. Install Dependencies

Install all project dependencies:

```bash
npm install
```

## 4. Set Up MongoDB with Docker

Start a MongoDB container on Docker with the necessary initialization settings. Run the following command:

```bash
docker run --name mongodb-container -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
```

This command creates a MongoDB container that exposes port `27017` and sets the initial username and password.

## 5. Configure Environment Variables

To connect the application to MongoDB, configure the connection URL in the project’s `.env` file. Example configuration:

```env
MONGODB_URI=mongodb://admin:secret@localhost:27017/mydatabase
PAYLOAD_SECRET=your_payload_secret_key
PORT=3001
```

- **`MONGODB_URI`**: The connection URL for MongoDB. Adjust `username`, `password`, `host`, `port`, and `database` as needed.
- **`PAYLOAD_SECRET`**: A secure secret used by Payload CMS (can be any alphanumeric sequence).
- **`PORT`**: The port on which the server will run. In this example, it's `3001`.

## 6. Start Containers with Docker Compose

Use Docker Compose to start all necessary services. Run the following command:

```bash
docker-compose up
```

## 7. Start the Server

Finally, start the server in development mode:

```bash
npm run dev
```

The project should now be running on the specified port. Access it at `http://localhost:<PORT>` to interact with the application.

---

Following these steps will have the project set up and running on your local machine.

## Authentication Endpoints - Users
## It can also be accessed at:
`/api-docs`

### Login
- **Route**: `POST /api/users/login`
- **Body**:
  ```json
  {
    "email": "johndoe@gmail.com",
    "password": "1234"
  }
  ```
- **Response**:
  ```json
  {
    "exp": 1731439412,
    "message": "Auth Passed",
    "token": "jwt_token",
    "user": {
      "id": "6732908b6e8fa26cb351f912",
      "email": "johndoe@gmail.com",
      "createdAt": "2024-11-11T23:17:31.582Z",
      "updatedAt": "2024-11-12T00:09:05.499Z",
      "roles": "admin",
      "loginAttempts": 0
    }
  }
  ```

### Logout
- **Route**: `POST /api/users/logout`
- **Response**:
  ```json
  {
    "message": "You have been logged out successfully."
  }
  ```

### Refresh Token
- **Route**: `POST /api/users/refresh-token`
- **Response**:
  ```json
  {
    "message": "Token refresh successful",
    "exp": 1731439588,
    "refreshedToken": "new_jwt_token",
    "user": { ... }
  }
  ```

### Current User
- **Route**: `GET /api/users/me`
- **Response**:
  ```json
  {
    "user": { ... },
    "collection": "users",
    "strategy": "local-jwt",
    "exp": 1731439588,
    "token": "jwt_token"
  }
  ```

## CRUD Endpoints - Users

### List Users
- **Route**: `GET /api/users`
- **Authorization**: Only admins can see all users.
- **Response**:
  ```json
  {
    "docs": [{ ... }],
    "totalDocs": 3,
    "page": 1,
    "hasNextPage": false
  }
  ```

### Get User by ID
- **Route**: `GET /api/users/{id}`
- **Response**:
  ```json
  {
    "id": "6732c7d8cf7a61711d958986",
    "name": "John Doe",
    "roles": "member",
    "email": "JohnDoe@gmail.com",
    "createdAt": "2024-11-12T03:13:28.938Z"
  }
  ```

### Create User
- **Route**: `POST /api/users`
- **Authorization**: Admins only.
- **Body**:
  ```json
  {
    "email": "JohnDoe@gmail.com",
    "password": "1234",
    "confirmPassword": "1234",
    "name": "John Doe",
    "roles": "member"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User successfully created.",
    "doc": { ... }
  }
  ```

### Update User
- **Route**: `PATCH /api/users/{id}`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "roles": "member"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Updated successfully.",
    "doc": { ... }
  }
  ```

### Delete User
- **Route**: `DELETE /api/users/{id}`
- **Authorization**: Admins only.

---

## CRUD Endpoints - Products

### List Products
- **Route**: `GET /api/products`
- **Response**:
  ```json
  {
    "docs": [{ ... }],
    "totalDocs": 5
  }
  ```

### Get Product by ID
- **Route**: `GET /api/products/{id}`
- **Response**:
  ```json
  {
    "id": "6732ac4a33f1330d655b4317",
    "name": "TesteDoMetodoPost",
    "description": "asdadadad",
    "price": 231231,
    "quantity": 121,
    "createdAt": "2024-10-28T12:00:00.000Z"
  }
  ```

### Create Product
- **Route**: `POST /api/products`
- **Authorization**: Admins only.
- **Body**:
  ```json
  {
    "name": "teste",
    "description": "teste",
    "price": 12,
    "quantity": 12
  }
  ```
- **Response**:
  ```json
  {
    "message": "Product successfully created.",
    "doc": { ... }
  }
  ```

### Update Product
- **Route**: `PATCH /api/products/{id}`
- **Authorization**: Admins only.

### Delete Product
- **Route**: `DELETE /api/products/{id}`
- **Authorization**: Admins only.

---

## CRUD Endpoints - Catalog

### List Catalogs
- **Route**: `GET /api/catalog`
- **Authorization**: Admins can view all catalogs; members only see their own catalogs.
- **Response**:
  ```json
  {
    "docs": [{ ... }],
    "totalDocs": 9
  }
  ```

### Get Catalog by ID
- **Route**: `GET /api/catalog/{id}`
- **Response**:
  ```json
  {
    "id": "67338a80bcbb4f4874774f2a",
    "title": "teste",
    "products": [{ ... }],
    "createdAt": "2024-11-12T17:04:00.869Z"
  }
  ```

### Create Catalog
- **Route**: `POST /api/catalog`
- **Authorization**: Admins or the logged-in user only.
- **Body**:
  ```json
  {
    "title": "string",
    "products": ["product_id"],
    "createdBy": "user_id"
  }
  ```

### Update Catalog
- **Route**: `PATCH /api/catalog/{id}`
- **Authorization**: Only the catalog owner or admins.
- **Body**:
  ```json
  {
    "title": "string",
    "products": ["product_id"]
  }
  ```

### Delete Catalog
- **Route**: `DELETE /api/catalog/{id}`
- **Authorization**: Only the catalog owner or admins.

# PT-BR

# Documentação da API

# Instruções para Iniciar o Projeto

## 1. Clone o Repositório

Primeiro, faça o clone do repositório para a sua máquina local:

```bash
git clone https://github.com/GameBloog/NodeJsPayloadCMS.git
```

## 2. Acesse o Diretório do Projeto

Entre no diretório criado:

```bash
cd NodeJsPayloadCMS
```

## 3. Instale as Dependências

Instale todas as dependências do projeto:

```bash
npm install
```

## 4. Configurar o MongoDB com Docker

Suba um container MongoDB no Docker com as configurações de inicialização necessárias. Execute o seguinte comando:

```bash
docker run --name mongodb-container -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
```

Este comando cria um container MongoDB que expõe a porta 27017 e define o nome de usuário e senha iniciais.

## 5. Configurar Variáveis de Ambiente

Para conectar a aplicação ao MongoDB, configure o link de conexão nas variáveis de ambiente no arquivo `.env` do projeto. Exemplo de configuração:

```env
MONGODB_URI=mongodb://admin:secret@localhost:27017/mydatabase
PAYLOAD_SECRET=your_payload_secret_key
PORT=3001
```

- **`MONGODB_URI`**: A URL de conexão ao MongoDB. Ajuste `username`, `password`, `host`, `port`, e `database` conforme necessário.
- **`PAYLOAD_SECRET`**: Um segredo seguro usado pelo Payload CMS (pode ser uma sequência de letras e números).
- **`PORT`**: A porta na qual o servidor vai rodar. Neste exemplo, é a `3001`.

## 6. Subir os Containers com Docker Compose

Use o Docker Compose para subir todos os serviços necessários. Execute o comando:

```bash
docker-compose up
```

## 7. Iniciar o Servidor

Por fim, inicie o servidor em modo de desenvolvimento com o comando:

```bash
npm run dev
```

O projeto deve estar rodando na porta especificada nas variáveis de ambiente. Acesse `http://localhost:<PORT>` para interagir com a aplicação.

--- 

Com esses passos, o projeto estará pronto para uso e configuração em sua máquina local.

## Endpoints de Autenticação - Users
## Também pode ser acessada em:
`/api-docs`

### Login
- **Rota**: `POST /api/users/login`
- **Body**:
  ```json
  {
    "email": "johndoe@gmail.com",
    "password": "1234"
  }
  ```
- **Resposta**:
  ```json
  {
    "exp": 1731439412,
    "message": "Auth Passed",
    "token": "jwt_token",
    "user": {
      "id": "6732908b6e8fa26cb351f912",
      "email": "johndoe@gmail.com",
      "createdAt": "2024-11-11T23:17:31.582Z",
      "updatedAt": "2024-11-12T00:09:05.499Z",
      "roles": "admin",
      "loginAttempts": 0
    }
  }
  ```

### Logout
- **Rota**: `POST /api/users/logout`
- **Resposta**:
  ```json
  {
    "message": "You have been logged out successfully."
  }
  ```

### Refresh Token
- **Rota**: `POST /api/users/refresh-token`
- **Resposta**:
  ```json
  {
    "message": "Token refresh successful",
    "exp": 1731439588,
    "refreshedToken": "new_jwt_token",
    "user": { ... }
  }
  ```

### Current User
- **Rota**: `GET /api/users/me`
- **Resposta**:
  ```json
  {
    "user": { ... },
    "collection": "users",
    "strategy": "local-jwt",
    "exp": 1731439588,
    "token": "jwt_token"
  }
  ```

## Endpoints CRUD - Users

### Listar Usuários
- **Rota**: `GET /api/users`
- **Autorização**: Apenas admins podem ver todos os usuários.
- **Resposta**:
  ```json
  {
    "docs": [{ ... }],
    "totalDocs": 3,
    "page": 1,
    "hasNextPage": false
  }
  ```

### Obter Usuário por ID
- **Rota**: `GET /api/users/{id}`
- **Resposta**:
  ```json
  {
    "id": "6732c7d8cf7a61711d958986",
    "name": "John Doe",
    "roles": "member",
    "email": "JohnDoe@gmail.com",
    "createdAt": "2024-11-12T03:13:28.938Z"
  }
  ```

### Criar Usuário
- **Rota**: `POST /api/users`
- **Autorização**: Apenas admins.
- **Body**:
  ```json
  {
    "email": "JohnDoe@gmail.com",
    "password": "1234",
    "confirmPassword": "1234",
    "name": "John Doe",
    "roles": "member"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "User successfully created.",
    "doc": { ... }
  }
  ```

### Atualizar Usuário
- **Rota**: `PATCH /api/users/{id}`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "roles": "member"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Updated successfully.",
    "doc": { ... }
  }
  ```

### Deletar Usuário
- **Rota**: `DELETE /api/users/{id}`
- **Autorização**: Apenas admins.

---

## Endpoints CRUD - Products

### Listar Produtos
- **Rota**: `GET /api/products`
- **Resposta**:
  ```json
  {
    "docs": [{ ... }],
    "totalDocs": 5
  }
  ```

### Obter Produto por ID
- **Rota**: `GET /api/products/{id}`
- **Resposta**:
  ```json
  {
    "id": "6732ac4a33f1330d655b4317",
    "name": "TesteDoMetodoPost",
    "description": "asdadadad",
    "price": 231231,
    "quantity": 121,
    "createdAt": "2024-10-28T12:00:00.000Z"
  }
  ```

### Criar Produto
- **Rota**: `POST /api/products`
- **Autorização**: Apenas admins.
- **Body**:
  ```json
  {
    "name": "teste",
    "description": "teste",
    "price": 12,
    "quantity": 12
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Product successfully created.",
    "doc": { ... }
  }
  ```

### Atualizar Produto
- **Rota**: `PATCH /api/products/{id}`
- **Autorização**: Apenas admins.

### Deletar Produto
- **Rota**: `DELETE /api/products/{id}`
- **Autorização**: Apenas admins.

---

## Endpoints CRUD - Catalog

### Listar Catálogos
- **Rota**: `GET /api/catalog`
- **Autorização**: Admins podem ver todos os catálogos; membros veem apenas os próprios catálogos.
- **Resposta**:
  ```json
  {
    "docs": [{ ... }],
    "totalDocs": 9
  }
  ```

### Obter Catálogo por ID
- **Rota**: `GET /api/catalog/{id}`
- **Resposta**:
  ```json
  {
    "id": "67338a80bcbb4f4874774f2a",
    "title": "teste",
    "products": [{ ... }],
    "createdAt": "2024-11-12T17:04:00.869Z"
  }
  ```

### Criar Catálogo
- **Rota**: `POST /api/catalog`
- **Autorização**: Apenas para admins ou o usuário logado.
- **Body**:
  ```json
  {
    "title": "string",
    "products": ["product_id"],
    "createdBy": "user_id"
  }
  ```

### Atualizar Catálogo
- **Rota**: `PATCH /api/catalog/{id}`
- **Autorização**: Apenas para o dono do catálogo ou admins.
- **Body**:
  ```json
  {
    "title": "string",
    "products": ["product_id"]
  }
  ```

### Deletar Catálogo
- **Rota**: `DELETE /api/catalog/{id}`
- **Autorização**: Apenas para o dono do catálogo ou admins.