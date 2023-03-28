# Backend em TypeScrip

A aplicação tem como objetivo ser um exemplo de API desenvolvida com TypeScript, que cadastra usuários recebendo seu nome, e-mail e senha e que permite listar os usuários já cadastrados. </br></br>
_OBSERVAÇÃO: o conteúdo tem como objetivo somente exemplificar uma aplicação simples. Não deve se prender a esse uso e nem a arquitetura aqui ultilizada._</br>

## 🚀 Começando

Faça o clone desse repositório:

```
git clone git@github.com:AlanDouglasASouza/back-end-ts.git
```

### 📋 Pré-requisitos

```
Node
Postgres
```

### 🔧 Instalação

Para iniciar a aplicação, estando dentro do diretório e em um ambiante com node, é necessário dar o comando `npm install` ou `yarn install` para instalar as dependências:

```
npm install
```

ou

```
yarn install
```

Foi configurado visando segurança, o uso de variáveis de ambiente com o arquivo _.env_, como demonstra o arquivo de exemplo `.env-exemple`:

```
PORT=
DBUSER=
DBPASSWORD=
DBHOST=
DBPORT=
DBNAME=
```

O comando `npm run dev` inicia a aplicação no modo de _desenvolvimento_ e `npm run build` é o comando usado para fazer o _build_:

```
npm run dev
```
ou
```
npm run build
```

Após iniciado, o console exibe a mensagem "Server ON!".

```
...
Server ON!
```

## ⚙️ Testando Rotas

As rotas para uso da aplicação são:

```
GET /users
```

Irá trazer todos os usuários cadastrados que se encontram no banco de dados setado no _.env_. Retorna `Status: 200 OK`.

```
POST /users

{
    "name": "João Candido",
    "email": "joao@gmail.com",
    "password": "123456"
}
```

Irá criar o usuário com os dados do corpo da requisição e retorna `Status: 204 OK` e o _cookie_ com o id do usuário.


## 🛠️ Construído com

-   [Express](https://expressjs.com/pt-br/) - Framework web
-   [Npm](https://www.npmjs.com/) - Gerenciador de Dependências

## ✒️ Autores

-   **Alan D. A. Souza** - _Desenvolvimento e construção do projeto_ - [Alan Douglas](https://github.com/AlanDouglasASouza)

## 🎁 Expressões de gratidão

-   Instituto Alpha Lumen 🫂;
-   Equipe Alpha Edtech 📢;

---

⌨️ com ❤️ por [Alan Douglas Artigas de Souza](https://www.linkedin.com/in/alan-douglas-artigas-souza) 😊

