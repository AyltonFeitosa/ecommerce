# **E-commerce MEAN Stack**

Este é um projeto de **E-commerce** desenvolvido com o **MEAN Stack** (MongoDB, Express.js, Angular e Node.js). A aplicação permite navegação por produtos, visualização de detalhes, gerenciamento de carrinho de compras e autenticação de usuários.

As tecnologias utilizadas incluem:  
- **MongoDB**, banco de dados NoSQL para armazenar produtos, usuários e pedidos.  
- **Express.js**, framework para Node.js que gerencia rotas e APIs.  
- **Angular**, framework frontend para criação de interfaces dinâmicas.  
- **Node.js**, ambiente de execução para o backend.

## **Pré-requisitos**  
Antes de iniciar, garanta que as seguintes ferramentas estejam instaladas:  
[MongoDB](https://www.mongodb.com/try/download/community) ou conexão com o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas);  
[Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/);  
[Git](https://git-scm.com/);  
[Angular CLI](https://angular.io/cli), que pode ser instalado com o comando: `npm install -g @angular/cli`.

## **Configuração do Projeto**  
1. Clone o repositório com o comando:  
   `git clone https://github.com/seu-usuario/nome-do-repositorio.git`.

2. Configure o backend:  
   - Acesse o diretório com: `cd nome-do-repositorio/backend`.  
   - Instale as dependências com: `npm install`.  
   - Crie um arquivo `.env` na raiz do backend com as configurações:  
     ```
     MONGO_URI=mongodb://localhost:27017/ecommerce  
     PORT=3000  
     JWT_SECRET=sua_chave_secreta  
     ```  
   - Inicie o servidor backend com: `npm run start`.

3. Configure o frontend:  
   - Acesse o diretório com: `cd nome-do-repositorio/frontend`.  
   - Instale as dependências com: `npm install`.  
   - Inicie a aplicação Angular com: `ng serve`.  
   - Abra o navegador e acesse: [http://localhost:4200](http://localhost:4200).

## **Scripts Importantes**  
- **Backend**:  
  - `npm run start`: Inicia o servidor Node.js.  
  - `npm run dev`: Inicia o servidor com nodemon para recarregamento automático.  

- **Frontend**:  
  - `ng serve`: Inicia o servidor Angular para desenvolvimento.  
  - `ng build`: Compila o projeto Angular para produção.

Com estas instruções, você terá o ambiente configurado e o projeto rodando corretamente. Aproveite o desenvolvimento do seu **E-commerce MEAN Stack**!
