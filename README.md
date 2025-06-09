Projeto Calmaria Spa - Full Stack
Este repositório contém o projeto completo do site "Calmaria Spa", uma aplicação web full stack desenvolvida como parte dos estudos. O projeto começou como uma landing page estática e evoluiu para uma aplicação dinâmica com backend e integração com banco de dados, permitindo interações reais do usuário através de formulários.

✨ Funcionalidades
Frontend: Uma interface de usuário visualmente agradável e responsiva para um spa de relaxamento.
Animações e Interatividade: Efeitos de scroll suave e animações de surgimento de elementos para uma experiência de usuário mais fluida, implementados com JavaScript e a biblioteca AOS (Animate on Scroll).
Backend (API): Um servidor robusto construído com Node.js e Express.js que gerencia a lógica de negócio.
Formulário de Newsletter Funcional: Permite que usuários se cadastrem com seus e-mails, com os dados sendo salvos diretamente no banco de dados.
Formulário de Contato Funcional: Usuários podem enviar mensagens, que são armazenadas de forma segura para consulta posterior.
Persistência de Dados: Todas as informações submetidas pelos formulários são armazenadas em um banco de dados Microsoft SQL Server.
🚀 Tecnologias Utilizadas
Frontend
HTML5
CSS3 (com conceitos de SASS aplicados)
JavaScript
AOS (Animate on Scroll) - Biblioteca para animações.
Backend
Node.js - Ambiente de execução para JavaScript no servidor.
Express.js - Framework para a criação da API e gerenciamento de rotas.
dotenv - Para gerenciamento de variáveis de ambiente.
cors - Para permitir a comunicação entre o frontend e o backend.
Banco de Dados
Microsoft SQL Server - Sistema de Gerenciamento de Banco de Dados.
mssql - Driver Node.js para conectar a aplicação ao SQL Server.
SQL Server Management Studio (SSMS) - Ferramenta para administração do banco de dados.
📁 Estrutura do Projeto
O projeto está organizado em duas partes principais:

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
🔧 Como Executar o Projeto
Siga os passos abaixo para configurar e executar o projeto em um ambiente de desenvolvimento local.

Pré-requisitos
Node.js instalado.
Microsoft SQL Server (edição Developer ou Express) instalado e rodando.
SQL Server Management Studio (SSMS) instalado.
Git instalado.
1. Configuração do Banco de Dados
Abra o SSMS e conecte-se à sua instância do SQL Server.
Crie um novo banco de dados chamado CalmariaDB.
Abra uma "Nova Consulta" e execute o script SQL abaixo para criar as tabelas necessárias:
SQL

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
Certifique-se de que o seu usuário do Windows tenha permissões de acesso ao SQL Server (configurado como sysadmin durante a instalação).
2. Configuração do Backend
Clone este repositório: git clone <url-do-repositorio>
Navegue até a pasta do backend: cd calmaria-backend
Instale as dependências: npm install
Crie um arquivo chamado .env na raiz da pasta calmaria-backend e adicione o seguinte conteúdo, ajustando se necessário:
Snippet de código

# Variáveis de ambiente para o backend
DB_SERVER=localhost
DB_DATABASE=CalmariaDB
DB_PORT=1433
DB_ENCRYPT=false
DB_TRUST_SERVER_CERTIFICATE=true

PORT=3000
Inicie o servidor backend: node server.js
O terminal deve exibir "Servidor rodando na porta 3000" e "Conexão com o banco de dados... estabelecida com sucesso!".
3. Execução do Frontend
Navegue até a pasta do frontend.
Abra o arquivo index.html em seu navegador. Para uma melhor experiência e para evitar problemas de CORS, é recomendado usar uma extensão como o Live Server no Visual Studio Code.
💡 A Jornada de Desenvolvimento
Este projeto representa uma jornada completa de aprendizado, partindo de uma base puramente visual e estática para uma aplicação com lógica e persistência de dados.

O processo incluiu:

Estilização e Estruturação do Frontend: Construção da interface com HTML semântico e CSS, aplicando conceitos avançados de estilização.
Dinamismo com JavaScript: Adição de interatividade, como a rolagem suave e animações, para melhorar a experiência do usuário.
Criação de um Servidor Backend: Decisão de evoluir o projeto, construindo uma API RESTful com Node.js e Express para receber dados dos formulários.
Integração com Banco de Dados: Conexão do backend a um banco de dados relacional (MS SQL Server) para armazenar os dados de forma segura e persistente.
Troubleshooting e Configuração de Ambiente: Uma parte significativa do projeto foi a depuração e resolução de problemas de ambiente, como a instalação e configuração do SQL Server, habilitação de protocolos de rede, ajuste de firewall e, principalmente, a configuração correta das permissões de usuário (Autenticação do Windows vs. Autenticação SQL), que foram etapas cruciais para o sucesso da aplicação.
✒️ Autor
Roberto Silva

Projeto desenvolvido com base no curso "Sass e CSS: estilizando um site" da Alura e expandido com a construção de um backend e integração com banco de dados.
