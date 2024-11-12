# API Documentation

## Authentication Endpoints - Users

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
## Também pode ser acessada em:
`/api-docs`


## Endpoints de Autenticação - Users

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