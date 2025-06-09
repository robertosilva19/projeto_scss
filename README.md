# Projeto Calmaria Spa - Full Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Microsoft SQL Server](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)

Este repositório contém o projeto completo do site "Calmaria Spa", uma aplicação web full stack desenvolvida como parte dos estudos. O projeto começou como uma landing page estática e evoluiu para uma aplicação dinâmica com backend e integração com banco de dados, permitindo interações reais do usuário através de formulários.

## ✨ Funcionalidades

-   **Frontend:** Uma interface de usuário visualmente agradável e responsiva para um spa de relaxamento.
-   **Animações e Interatividade:** Efeitos de scroll suave e animações de surgimento de elementos para uma experiência de usuário mais fluida, implementados com JavaScript e a biblioteca AOS (Animate on Scroll).
-   **Backend (API):** Um servidor robusto construído com Node.js e Express.js que gerencia a lógica de negócio.
-   **Formulário de Newsletter Funcional:** Permite que usuários se cadastrem com seus e-mails, com os dados sendo salvos diretamente no banco de dados.
-   **Formulário de Contato Funcional:** Usuários podem enviar mensagens, que são armazenadas de forma segura para consulta posterior.
-   **Persistência de Dados:** Todas as informações submetidas pelos formulários são armazenadas em um banco de dados Microsoft SQL Server.

## 🚀 Tecnologias Utilizadas

#### **Frontend**
-   HTML5
-   CSS3 (com conceitos de SASS aplicados)
-   JavaScript
-   [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/) - Biblioteca para animações.

#### **Backend**
-   [Node.js](https://nodejs.org/) - Ambiente de execução para JavaScript no servidor.
-   [Express.js](https://expressjs.com/pt-br/) - Framework para a criação da API e gerenciamento de rotas.
-   [dotenv](https://www.npmjs.com/package/dotenv) - Para gerenciamento de variáveis de ambiente.
-   [cors](https://www.npmjs.com/package/cors) - Para permitir a comunicação entre o frontend e o backend.

#### **Banco de Dados**
-   [Microsoft SQL Server](https://www.microsoft.com/pt-br/sql-server/) - Sistema de Gerenciamento de Banco de Dados.
-   [mssql](https://www.npmjs.com/package/mssql) - Driver Node.js para conectar a aplicação ao SQL Server.
-   [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/pt-br/sql/ssms/download-sql-server-management-studio-ssms) - Ferramenta para administração do banco de dados.

## 📁 Estrutura do Projeto

O projeto está organizado em duas partes principais:

```
/
├── calmaria-frontend/ (ou a raiz do projeto)
│ ├── assets/
│ ├── styles/
│ ├── js/
│ │ └── script.js
│ └── index.html
│
└── calmaria-backend/
├── node_modules/
├── .env (arquivo local, não versionado)
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## 🔧 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em um ambiente de desenvolvimento local.

#### **Pré-requisitos**
-   [Node.js](https://nodejs.org/) instalado.
-   [Microsoft SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) (edição Developer ou Express) instalado e rodando.
-   [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/pt-br/sql/ssms/download-sql-server-management-studio-ssms) instalado.
-   [Git](https://git-scm.com/) instalado.

#### **1. Configuração do Banco de Dados**
1.  Abra o **SSMS** e conecte-se à sua instância do SQL Server.
2.  Crie um novo banco de dados chamado `CalmariaDB`.
3.  Abra uma "Nova Consulta" e execute o script SQL abaixo para criar as tabelas necessárias:
    ```sql
    USE CalmariaDB;
    GO

    CREATE TABLE NewsletterSubscriptions (
        SubscriptionID INT PRIMARY KEY IDENTITY(1,1),
        Email NVARCHAR(255) NOT NULL UNIQUE,
        SubscriptionDate DATETIME NOT NULL DEFAULT GETDATE()
    );
    GO

    CREATE TABLE ContactMessages (
        MessageID INT PRIMARY KEY IDENTITY(1,1),
        FullName NVARCHAR(255) NOT NULL,
        Email NVARCHAR(255) NOT NULL,
        PhoneNumber NVARCHAR(50) NULL,
        MessageText NVARCHAR(MAX) NOT NULL,
        SubmissionDate DATETIME NOT NULL DEFAULT GETDATE()
    );
    GO
    ```
4.  Certifique-se de que o seu usuário do Windows tenha permissões de acesso ao SQL Server (configurado como `sysadmin` durante a instalação).

#### **2. Configuração do Backend**
1.  Clone este repositório: `git clone <url-do-repositorio>`
2.  Navegue até a pasta do backend: `cd calmaria-backend`
3.  Instale as dependências: `npm install`
4.  Crie um arquivo chamado `.env` na raiz da pasta `calmaria-backend` e adicione o seguinte conteúdo, ajustando se necessário:
    ```env
    # Variáveis de ambiente para o backend
    DB_SERVER=localhost
    DB_DATABASE=CalmariaDB
    DB_PORT=1433
    DB_ENCRYPT=false
    DB_TRUST_SERVER_CERTIFICATE=true

    PORT=3000
    ```
5.  Inicie o servidor backend: `node server.js`
    -   O terminal deve exibir "Servidor rodando na porta 3000" e "Conexão com o banco de dados... estabelecida com sucesso!".

#### **3. Execução do Frontend**
1.  Navegue até a pasta do frontend.
2.  Abra o arquivo `index.html` em seu navegador. Para uma melhor experiência e para evitar problemas de CORS, é recomendado usar uma extensão como o **Live Server** no Visual Studio Code.

## 💡 A Jornada de Desenvolvimento

Este projeto representa uma jornada completa de aprendizado, partindo de uma base puramente visual e estática para uma aplicação com lógica e persistência de dados.

O processo incluiu:
1.  **Estilização e Estruturação do Frontend:** Construção da interface com HTML semântico e CSS, aplicando conceitos avançados de estilização.
2.  **Dinamismo com JavaScript:** Adição de interatividade, como a rolagem suave e animações, para melhorar a experiência do usuário.
3.  **Criação de um Servidor Backend:** Decisão de evoluir o projeto, construindo uma API RESTful com Node.js e Express para receber dados dos formulários.
4.  **Integração com Banco de Dados:** Conexão do backend a um banco de dados relacional (MS SQL Server) para armazenar os dados de forma segura e persistente.
5.  **Troubleshooting e Configuração de Ambiente:** Uma parte significativa do projeto foi a depuração e resolução de problemas de ambiente, como a instalação e configuração do SQL Server, habilitação de protocolos de rede, ajuste de firewall e, principalmente, a configuração correta das permissões de usuário (Autenticação do Windows vs. Autenticação SQL), que foram etapas cruciais para o sucesso da aplicação.

## ✒️ Autor

**Roberto Silva**

*Projeto desenvolvido com base no curso "Sass e CSS: estilizando um site" da [Alura](https://www.alura.com.br/) e expandido com a construção de um backend e integração com banco de dados.*
