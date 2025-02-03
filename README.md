# **E-commerce MEAN Stack**  

Este é um projeto de **E-commerce** desenvolvido com o **MEAN Stack** (MongoDB, Express.js, Angular e Node.js). A aplicação permite navegação por produtos, visualização de detalhes, gerenciamento de carrinho de compras e autenticação de usuários.  

## **🚀 Deploy e Acesso ao Projeto**  
O projeto está disponível online e pode ser acessado através do seguinte link:  
🔗 [Acesse a loja aqui](https://ayltonstore.vercel.app).  

### **Tecnologias de Deploy Utilizadas**  
- **Frontend** hospedado na **Vercel**, garantindo alta performance e carregamento rápido.  
- **Backend** hospedado na **Render**, proporcionando escalabilidade e estabilidade.  
- **Banco de Dados** configurado na nuvem com **MongoDB Atlas**, permitindo um armazenamento seguro e eficiente.  

Para visualizar o código-fonte completo do projeto, acesse o repositório no GitHub:  
🔗 [Repositório do projeto](https://github.com/AyltonFeitosa/ecommerce/tree/main)  

## **🛠 Tecnologias Utilizadas**  
- **MongoDB**: Banco de dados NoSQL para armazenar produtos, usuários e pedidos.  
- **Express.js**: Framework para Node.js que gerencia rotas e APIs.  
- **Angular**: Framework frontend para criação de interfaces dinâmicas.  
- **Node.js**: Ambiente de execução para o backend.  

## **📌 Pré-requisitos**  
Antes de iniciar, garanta que as seguintes ferramentas estejam instaladas:  
- [MongoDB](https://www.mongodb.com/try/download/community) ou conexão com o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  
- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/).  
- [Git](https://git-scm.com/).  
- [Angular CLI](https://angular.io/cli), que pode ser instalado com o comando:  
  ```bash
  npm install -g @angular/cli
  ```  

## **⚙️ Configuração do Projeto**  

### **1️⃣ Clonar o Repositório**  
```bash
git clone https://github.com/AyltonFeitosa/ecommerce.git
```  

### **2️⃣ Configuração do Backend**  
- Acesse o diretório:  
  ```bash
  cd ecommerce/backend
  ```  
- Instale as dependências:  
  ```bash
  npm install
  ```  
- Crie um arquivo `.env` na raiz do backend com as configurações:  
  ```
  MONGO_URI=mongodb+srv://seu-usuario:senha@cluster.mongodb.net/ecommerce
  PORT=3000
  JWT_SECRET=sua_chave_secreta
  ```  
- Inicie o servidor backend:  
  ```bash
  npm run start
  ```  

### **3️⃣ Configuração do Frontend**  
- Acesse o diretório:  
  ```bash
  cd ecommerce/frontend
  ```  
- Instale as dependências:  
  ```bash
  npm install
  ```  
- Inicie a aplicação Angular localmente:  
  ```bash
  ng serve
  ```  
- Acesse no navegador: [http://localhost:4200](http://localhost:4200).  

## **📜 Scripts Importantes**  

### **Backend**  
- `npm run start` → Inicia o servidor Node.js.  
- `npm run dev` → Inicia o servidor com nodemon para recarregamento automático.  

### **Frontend**  
- `ng serve` → Inicia o servidor Angular para desenvolvimento.  
- `ng build` → Compila o projeto Angular para produção.  

Agora você pode acessar a loja online, explorar os produtos e testar todas as funcionalidades! 🚀
