# API Node.js Project

API REST desenvolvida com Node.js, Express e Prisma para autenticação de usuários.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Prisma** - ORM para MongoDB
- **JWT** - Autenticação via tokens
- **bcryptjs** - Hash de senhas
- **CORS** - Compartilhamento de recursos entre origens

## 📋 Pré-requisitos

- Node.js instalado
- MongoDB Atlas (ou MongoDB local)
- Git

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone <URL-DO-REPOSITORIO>
cd api-nodejs-project
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Configure seu `.env`:

```env
DATABASE_URL="mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/NOME-DB?appName=Cluster0"
JWT_SECRET="SUA-CHAVE-SECRETA-AQUI"
PORT="8080"
```

5. Gere o Prisma Client:

```bash
npx prisma generate
```

## 🏃‍♂️ Executando

### Modo Desenvolvimento

```bash
npm run dev
```

A API estará disponível em `http://localhost:8080`

## 📚 Endpoints

### Autenticação

#### Registrar Usuário

```http
POST /register
Content-Type: application/json

{
  "name": "Nome do Usuário",
  "email": "email@exemplo.com",
  "password": "senha123"
}
```

#### Login

```http
POST /login
Content-Type: application/json

{
  "email": "email@exemplo.com",
  "password": "senha123"
}
```

#### Resposta do Login

```json
{
  "user": {
    "id": "69c2b6073cd7df7d9232fa2d",
    "email": "email@exemplo.com",
    "name": "Nome do Usuário"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Rota Protegida

```http
GET /me
Authorization: Bearer <TOKEN_JWT>
```

**Resposta:**

```json
{
  "message": "Working!",
  "userId": "69c2b6073cd7df7d9232fa2d"
}
```

**Erros possíveis:**

- `401 Unauthorized` - Token não fornecido
- `403 Forbidden` - Token inválido ou expirado

## 🔧 Estrutura do Projeto

```
api-nodejs-project/
├── src/
│   ├── controllers/
│   │   └── auth_controller.js    # Controladores de autenticação
│   ├── middlewares/
│   │   └── validateToken.js      # Middleware de validação JWT
│   ├── services/
│   │   └── auth_service.js        # Lógica de negócio
│   ├── utils/
│   │   ├── generateToken.js       # Geração de JWT
│   │   └── prisma.js              # Conexão com Prisma
│   └── routes/
│       └── routes.js              # Rotas da API
├── prisma/
│   └── schema.prisma              # Schema do banco
├── server.js                      # Arquivo principal
├── .env                           # Variáveis de ambiente
└── package.json                   # Dependências
```

## 🗄️ Banco de Dados

### Schema (MongoDB)

#### Usuários

```javascript
{
  id: String (ObjectId),
  name: String,
  email: String (unique),
  password: String (hash bcrypt)
}
```

## 🔐 Segurança

- Senhas hasheadas com bcryptjs
- Tokens JWT com expiração de 12 horas
- Variáveis de ambiente protegidas no `.gitignore`
- CORS configurado

## 🐛 Troubleshooting

### Problemas Comuns

**Erro: "DATABASE_URL não encontrado"**

- Verifique se o arquivo `.env` existe
- Confirme se as variáveis estão configuradas corretamente

**Erro: "Prisma Client não encontrado"**

- Execute `npx prisma generate`
- Verifique se o `@prisma/client` está instalado

**Erro: "Token inválido"**

- Verifique se o token JWT está sendo enviado no header `Authorization`
- Confirme se o `JWT_SECRET` é o mesmo no backend

## 📝 Licença

MIT License

## 👤 Autor

Pedro Henrique Costa Ribeiro
