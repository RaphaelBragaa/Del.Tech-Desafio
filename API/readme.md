
# Demanda 1:
## API RESTful Node.js + MongoDB + Docker

## Descrição do Projeto

Esta é uma API RESTful simples desenvolvida em **Node.js** com **TypeScript** e **Express**, conectada a um banco de dados **MongoDB**. O projeto foi completamente dockerizado, permitindo fácil execução e portabilidade. O objetivo principal é demonstrar uma arquitetura limpa, organização de código, uso de boas práticas e integração entre aplicação e banco de dados utilizando Docker Compose.

---

## Índice

- [Demanda 1:](#demanda-1)
  - [API RESTful Node.js + MongoDB + Docker](#api-restful-nodejs--mongodb--docker)
  - [Descrição do Projeto](#descrição-do-projeto)
  - [Índice](#índice)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Como Executar](#como-executar)
  - [Principais Funcionalidades](#principais-funcionalidades)
  - [Dificuldades e Lógica de Superação](#dificuldades-e-lógica-de-superação)
    - [Dificuldades Encontradas](#dificuldades-encontradas)
    - [Lógica Utilizada](#lógica-utilizada)

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MongoDB
- Docker \& Docker Compose

---

## Estrutura do Projeto

```
API/
├── node_modules/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── dist/
│   ├── models/
│   ├── repositories/
│   ├── routers/
│   └── app.ts
├── .dockerignore
├── .env
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
└── tsconfig.json
```

- **src/**: Código-fonte da aplicação.
- **config/**: Configurações gerais.
- **controllers/**: Lógica das rotas.
- **database/**: Configuração da conexão com o MongoDB.
- **models/**: Modelos das entidades do banco.
- **repositories/**: Lógica de acesso a dados.
- **routers/**: Definição das rotas da API.
- **dist/**: Código compilado (TypeScript → JavaScript).
- **Dockerfile**: Build da imagem da API.
- **docker-compose.yml**: Orquestração dos containers da API e MongoDB.
- **.env**: Variáveis de ambiente.

---

## Como Executar

**Pré-requisitos:**

- Docker e Docker Compose instalados.

**Passos:**

1. Clone o repositório.
2. Configure o arquivo `.env` com as variáveis necessárias (ou use o exemplo `.env.example`).
3. Execute o comando abaixo na raiz do projeto:

```bash
docker-compose up --build
```

4. Acesse a API em `http://localhost:4000`.

---

## Principais Funcionalidades

- **Conexão com MongoDB** utilizando variáveis de ambiente.
- **Persistência de dados** via volumes Docker.
- **Rede compartilhada entre containers** para garantir comunicação entre API e banco.
- **Rotas RESTful** (exemplo: `GET /tarefas`, `DEL /tarefas`, `POST /tarefas`).

---

## Dificuldades e Lógica de Superação

### Dificuldades Encontradas

- **Integração entre containers:** Inicialmente, a API não conseguia se conectar ao MongoDB devido à configuração incorreta do host na string de conexão.
**Solução:** Utilizei o nome do serviço Docker (`mongodb`) como host na variável de ambiente, garantindo a resolução correta na rede interna do Docker Compose.
- **Persistência dos dados:** O banco perdia dados após reinicialização dos containers.
**Solução:** Configurei volumes no `docker-compose.yml` para garantir persistência.
- **Organização do código:** Manter o projeto modular e escalável exigiu separar controllers, models, routers, e configs em pastas distintas.
- **Gerenciamento de variáveis de ambiente:** Garantir que as variáveis fossem carregadas corretamente tanto localmente quanto em ambiente Docker.
- **Dependências desnecessárias e versão do Node:** Tive problemas durante o build devido a dependências que não estavam sendo utilizadas, e atualização da versão do Node devido a incompatibilidades com dependências.
**Solução:**: Removi as dependências que não estavam sendo utilizadas e ajustei para versão 20 o Node.
### Lógica Utilizada

- **Docker Compose** para orquestrar múltiplos containers (API + MongoDB) e facilitar o setup do ambiente.
- **Volumes Docker** para persistência dos dados do banco.
- **Rede Docker Compose** para comunicação isolada e segura entre API e banco.
- **TypeScript** para maior segurança e clareza no desenvolvimento.
- **Separação de responsabilidades** no código para facilitar manutenção e testes.

---




