![CRUD NODE/EXPRESS](./crudBF.png)
## Projeto: Criar uma Aplicação(API) Back-End (CRUD) e Conectar ao Front-End- seguindo as métricas de engenharia de software (MSC):

### o que é uma API?
> Uma API é um conjunto de rotinas, protocolos e ferramentas para construir aplicações.
> [Fonte: Stack OverFlow ](https://pt.stackoverflow.com/questions/86399/qual-a-diferen%C3%A7a-entre-endpoint-e-api);


### O que um CRUD?
> Nas manipulações de registros realizadas diretamente em banco de dados ou em plataformas
> desenvolvidas no padrão RESTful, o conceito CRUD estabelece o modelo correto no manuseio
> desses dados.
> CRUD representa as quatro principais operações realizadas em banco de dados, seja no modelo 
> relacional (SQL) ou não-relacional (NoSQL), facilitando no processamento dos dados e na 
> consistência e integridade das informações.  
> [Fonte de Informação: Blog byTrybe ](https://blog.betrybe.com/tecnologia/crud-operacoes-basicas/);


### 1 - Setup inicial da aplicação(Back-End):

- [x] Criando uma Pastas crud-back-front;

```console
mkdir crud-back-front
```

- [x] - Entrando na pasta;

```console
cd crud-back-front
```
- [x] - Criar um arquivo README.md;

```console
touch README.md
```

- [x] - criar uma arquivo .gitignore e colocar corpo do arquivo node_modules, env. como arquivo e pasta a ser ignorada; 

```console
touch .gitignore
```

> Dentro do Arquivo no corpo colocar: node_modules/
> Dentro do Arquivo: .env

- [x] Criando uma Pastas back-end;

```console
mkdir back-end
```

- [x] - Entrando na pasta;

```console
cd back-end
```


- [x] - criar arquivo json padrão;

  ```console
    npm init -y
  ```

- [x] Criando uma Pastas src;

```console
mkdir src
```

- [x] - Executar o comando de inicialização do git localmente na RAIZ do Projeto crud-back-front ;

```console
git init
```

- [x] - Criar um repositório remoto no github;
  
```text
tonistorres/crud-back-front

``` 
- [x] - Lincar o Repositório remoto ao repositório local; 

```text
git remote add origin xpto.git
```

- [x] - Na pasta back-end onde se encontra o arquivo package.json instalar  "git-commit-msg-linter";

```console
npm i git-commit-msg-linter -D
```
> Observacão: Significado das tags relacionadas ao commit-msg-linter

```console
type:
    feat     Adição de funcionalidade.
    fix      Correção de defeito.
    docs     Mudança em documentação.
    style    Mudança de formatação ou estilo, que não afeta a execução do código (espaço, tabulação, etc).
    refactor Mudança na organização do código, que não afeta o comportamento existente.
    test     Adição ou mudança de um teste.
    chore    Adição ou mudança em script de build, que não afeta o código de produção.
    perf     Mudança de código para melhoria de desempenho.
    ci       Mudança de configuração de integração contínua.
    build    Mudança em arquivos de build ou em dependências externas.
    temp     Commit temporário, que não deve ser incluído no CHANGELOG.

  scope:
    Opcional, pode ser qualquer coisa que especifique o escopo da mudança.
    Exemplos: subpacote, workspace, módulo, componente, página.

  subject:
    Breve resumo da mudança, escrito no tempo verbal presente. Começa com letra minúscula e não há ponto final.
```

- [x] - Criar uma branch tonis-torres-back-front;

```console
git checkout -b tonis-torres-back-front;
```
> Alguns comandos git util no desenvolvimento:

```console
git status
git add .
git commit -m""
git push
git push -u origin nome_branch
git pull
git log 
git log --oneline
git tag "nome_tag" -m"" 
git tag -a "nome_tag" -m"" id
```


### 2 - Ferramentas e pacotes que utilizaremos no desenvolvimento da aplicação:

- [x] - FrameWork Express ;
- [x] - nodemom;
- [x] - Mysql;
- [x] - MySQL Workbench (Ferramenta Gráfica);
- [x] - Client que faz a conexão do Node com o Mysql (msql2); 
- [x] - body-parse;
- [x] - mocha ^9.2.2;
- [x] - chai: ^4.3.6; 
- [x] - sinon: ^13.0.1
  

### 3 - Instalando Dependências:

> Todos os comando abaixo deverão ser utilizado dentro da pasta back-end.

- [x] - npm install -D nodemon;
- [Link Pacote npm Nodemon ](https://duckduckgo.com)

  > Obs.: O D MAIÚSCULO é informa que é uma forma contraída de dizer que é uma Dependência de 
  > Desenvolvimento, ou seja, na hora de subir para a produção essa dependência não tem importancia para 
  > o bom funcionamento da minha aplicação, essa dependencia é somente para testes no momento do 
  > desenvolvimento.
 
- [x] - npm i express;
- [Link Express ](https://www.npmjs.com/package/express)


- [x] - npm install sequelize-cli;
- [Link Pacote npm Sequelize-Cli ](https://www.npmjs.com/package/sequelize-cli)

- [x] - npm i sequelize;
- [Link Sequelize ](https://www.npmjs.com/package/sequelize)

- [x] - npm i cors;
- [Link Cors ](https://www.npmjs.com/package/cors)
> o cors ele não é dependência de desenvolvimento, pois, em ambiente de produção ele deve constar na aplicação para fazer a conexão entre back e front.


- [x] - npm install mysql2
 > Client Utilizado para fazer a conexão de uma palicação Node Com Mysql (connector);

- [x] - npm i dotenv
 - [Link dotEnv ](https://www.npmjs.com/package/dotenv)

- [x] - npm i body-parser
  > Middleware de análise do corpo do Node.js.
  > Analise os corpos de solicitação de entrada em um middleware antes de seus manipuladores,
  > disponíveis na propriedade req.body.
- [Body-Parse](https://www.npmjs.com/package/body-parser)

- [x] - npm i http-status-codes (OPCIONAL)
  > códigos de status http constantes enumerando os códigos de status HTTP.
  > Baseado na API Java Apache HttpStatus.
  - [status-codes](https://www.npmjs.com/package/http-status-codes)
  
- [x] - npm install --save-dev chai
- [Link pacote npm Chai](https://www.npmjs.com/package/chai)

- [x] - npm install --save-dev mocha
- [Link pacote npm Mocha](https://www.npmjs.com/package/mocha)

- [x] - npm i --save-dev sinon 
- [Link Pacote npm Sinon](https://www.npmjs.com/package/sinon)

### 4 - Package.json, configurações back-end (Sripts):
 > Configurando o scrip que inicializar nossa aplicação, o arquivo principal da nossa aplicação será server.js

 ```javascritp
"scripts": {
    "start": "nodemon server.js"
  },
 ```

### 5 - Criando a estrutura de pastas (Projeto):

```console

|back-end|
    |
    |---------> |node_modules|
    |
    |---------> |src| 
                  |
                  |-------->|controllers|
                  |
                  |---------->|database|
                  |               |
                  |               |----------------->|config|
                  |               |
                  |               |----------------->|migrations|
                  |               |
                  |               |----------------->|models|
                  |               |
                  |               |----------------->|seedrs|
                  |
                  |-------->|middlewares|
                  |
                  |-------->|routes|
                  |
                  |-------->|services|
                  |             | 
                  |             |---------------------->|login|
                  |             |
                  |             |---------------------->|reserve|
                  |
                  |--------> |utils|
                                    


|front-end|                  
     |
     |---------> |node_modules|
     |
     |---------> |public|
     |
     |---------> |src| 
                   |
                   |------------->|components|   
                   |                   |
                   |                   |--------->|FormReserve|
                   |                   |
                   |                   |--------->|Fotter|
                   |                   |
                   |                   |--------->|Header|
                   |                   |
                   |                   |---------->|ListReserve|
                   |                   |
                   |                   |---------->|Loading|
                   |                   |
                   |                   |---------->|MyContext| 
                   |                   |
                   |                   |---------->|NotFound|
                   |                   | 
                   |                   |---------->|Timer|  
                   |
                   |--------------->|pages|
                   |                   |
                   |                   |------->|css| 
                   |
                   |
                   |-------------->|service|                                 
```         

![Font-End](./frontRedme.png)

### 6 - Setup inicial ambiente do Front-End:

- [x] Criando uma Pasta front-end;

```console
mkdir front-end
```

- [x] - Entrando na pasta;

```console
cd front-end
```

- [x] - Rodando o comando npx que cria a estrutura de pastas e arquivos do front-end;

```console
npx create-react-app app-reservas
```

### 6.1 - Ferramentas e pacotes que utilizaremos no desenvolvimento da aplicação(Front-End):


- [x] - axios: ^0.26.1 ;
  
```console
 npm install -D nodemon;
```

- [Link Pacote axios ](https://www.npmjs.com/package/axios)


- [x] - bootstrap: ^5.1.3;
  
```console
 npm i bootstrap
```

- [Link Pacote bootstrap ](https://www.npmjs.com/package/bootstrap)
  
> Para integrarmos o BootStrap a minha aplicaçao primeiro devemos fazer a instalação da biblioteca 
> bootstrap na aplicação, pois, o reactstrap não inclui o bootstrap(video: a partir de 2min 05s):

```console
npm install --save bootstrap
```
Logo em Seguida instalar o reactstrap(video: a partir 2min 38s ):

```console
npm install --save reactstrap react react-dom
```

> Depois precisamos fazer uma importação do bootstrap.mim no arquivo index.js dentro da pastas src:

```console
|font-end|
    |
    |---------------->|app-reserva|
                            |
                            |--------------->|src|
                                               |
                                               |--------> Arquivo: >> index.js <<
```

> Conteúdo index.js

```console
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />  
);

```

- [Tutorial com integrar o Framework React com a biblioteca bootsrtap](https://www.youtube.com/watch?v=90EGEu8tqY8)

- [x] - react: ^18.0.0;
  
```console
 npm i react
```

- [Link Pacote react ](https://www.npmjs.com/package/react)


- [x] - react-router-dom: ^5.3.1;
  
```console
 npm i react-router-dom
```

- [Link Pacote react-router-dom ](https://www.npmjs.com/package/react-router-dom)


- [x] - styled-components: ^5.3.5;
  
```console
 npm i styled-components
```    

- [Link Pacote styled-components ](https://www.npmjs.com/package/styled-components)


- [x] - React Toastify: ^5.1.3;
  
```console
 npm i react-toastify
```

> Uma lib que te por propósito tornar mais simples o processo de exibir notificações para o usuário.

- [Link Pacote reac-toastify ](https://www.npmjs.com/package/react-toastify)

- [Tutorial React-toastify](https://www.youtube.com/watch?v=gKXGndx1zu8)


### 6.2 - Resumo: Comentário de pastas e arquivos do projeto:

##### 6.2.1 - front-end/app-reserva:

> Essa pasta é a principal pasta do projeto, onde irá conter a estrutura de sub pastas filhas, como: Fotter, Header, InputsReserve etc.

##### 6.2.2 - front-end/app-reserva/src/components:

> Toda parte componentizada da aplicação irá ficar disposta nessa pasta.

##### 6.2.2.1 - front-end/app-reserva/src/components/Header: 

> Cotém todos os arquivos js e jsx responsável pela rederização do Cabeçalho da aplicação. 

##### 6.2.2.2 - front-end/app-reserva/src/components/Fotter: 

> Cotém todos os arquivos js e jsx responsável pela rederização do Rodapé da aplicação. 

##### 6.2.2.3 - front-end/app-reserva/src/components/FormReserve: 

> Cotém todos os arquivos js e jsx responsável pela rederização do Formulário da aplicação. 

##### 6.2.2.4 - front-end/app-reserva/src/components/ListReserve: 

> Cotém todos os arquivos js, jsx, gif,css responsável pela rederização da tabela na aplicação. 


##### 6.2.2.5 - front-end/app-reserva/src/components/NotFound: 

> Cotém todos os arquivos js, jsx, gif,css responsável pela rederização da pagina de erro aplicação. 


##### 6.2.2.6 - front-end/app-reserva/src/components/Loading: 

> Cotém todos os arquivos js, jsx e gif responsável pela rederização do carregamento inicial (apresentação) da aplicação. 

##### 6.2.2.7 - front-end/app-reserva/src/components/MyContext: 

> Cotém todos os arquivos jsx responsável pela abstração do meu contexto "store". 

##### 6.2.2.8 - front-end/app-reserva/src/components/Timer: 

> Cotém todos os arquivos jsx e js responsável pela renderização de um crônometro que irá controlar o tempo em que uma seção será aberta para usuário levando em consideração o tempo do token gerado. 


##### 6.2.3 - front-end/app-reserva/src/pages:

> Toda parte pagina da aplicação irá ficar disposta nessa pasta.


##### 6.2.3.1 - front-end/app-reserva/src/pages/css: 

> Contém alguns arquivos de configurações relacionado a arquivos jsx da pasta pages.

##### 6.2.4 - front-end/app-reserva/src/service:

> Toda parte de servir à aplicação irá ficar disposta nessa pasta.


![Docker Node](./dockerNode.jpeg)

### 7 - Dockerizando aplicação:

> Para aplicação ficar mais completa iremos trabalhar com micro serviços (docker), inicialmente iremos dockerizar o mysql e o NodeJS.

```yml
version: '3.1'
# inicialmente teremos 02(dois) microserviços trabalhando conjuntamente o mysql e o nodeJS (API - Back-End) 
services:

# 1º serviço mysql
  mysql:  
  # baixar a imagem do mysql 5.7 no docker hub
      image: mysql:5.7
      # da um nome para o nosso container mysql
      container_name: container-mysql
      # configurar nossa vairável de ambiente 
      environment:
        - MYSQL_ROOT_PASSWORD=xxxx
      ports:
      # rodar na porta 3308 na  minha maquina e 3306 no container
        - 3308:3306  

  # 2º serviço      
  api:
  # Baixar a última versão do node tag (latest)
    image: node:latest
    # vamos nomear o container como container-api
    container_name: container-api
    # restartar automaticamente a aplicação 
    restart: always
    # configurando a porta onde vai rodar api dentro do container docker
    ports:
    # rodar na porta 3001 na  minha maquina e 3001 no container
      - 3001:3001
    # configurando as variaveis de ambiente do mysql  
    environment:
        - DB_HOST=mysql
        - DB_NAME=dbreservas
        - DB_USER=root
        - DB_PASSWORD=1020
        - SERVER_PORT:3001
    # Fazendo um bind entre minha pasta back-end e usr/app dentro do meu container node    
    volumes:
      - ./back-end:/usr/app
    # setando meu diretório de trabalho onde será refletido as mudanças feitas na pasta back-end  
    working_dir: /usr/app
    # por fim vamos rodar o comando npm install e npm start para instalar as dependencias do meu projeto 
    # dentro do container e por fim inicializar minha aplicação back-end
    command: bash -c "npm install && npm start"            
```

> Para rodar o arquivo docker-compose digite o comando abaixo explicitado.

```console
docker-compose up -d
```

![ORM Sequelize](./sequelize.png)

### 8 - Sequelize:


#### 8.1 - O que é ORM (Sequelize)?

> O Sequelize é um ORM (Object-Relational Mapper)
> para Node.js, que tem suporte aos bancos de dados
> PostgreSQL, MariaDB, MySQL, SQLite e MSSQL, como 
> ORM ele faz o mapeamento de dados relacionais 
> (tabelas, colunas e linhas) para objetos 
> Javascript.

[Fonte: Blog Rocketseat ](https://blog.rocketseat.com.br/nodejs-express-sequelize/);

#### 8.2 - Criando estruturas de pastas do ORM (Sequelize) no projeto:

> Para organizar as pastas (migrations, seedrs e models) do ORM Sequelize dentro da pasta back-end na sub-pasta database, iremos primeiramente criar uma aquivo na raiz da pasta back-end com nome de .sequelizerc:

##### 8.2.1 - Ilustração do arquivo .sequelizerc na pasta back-end:

![Ilustração](./SeqRecExport.png)


##### 8.2.2 - Porque utilizar esse arquivo?
> Esse arquivo irá mapear a estrutura inicial de pastas e arquivos que serão acessadas pelo ORM (Sequelize).  


##### 8.2.3 - Ilustração do conteúdo do arquivo:

![Ilustração](./ilustre1.png)

##### 8.2.3.1 - Comando para executar o arquivo .sequelizerc contendo o mapeamento da estrutura de pastas e arquivos do ORM Sequelize:

```console
npx sequelize-cli init
```

```console
Esse comando irá criar as seguintes pastas:
config : contém um arquivo de configuração, com orientações para o CLI se conectar com o nosso banco de dados;
models : contém todos os modelos da nossa aplicação;
migrations : contém todos os arquivos de migração da nossa aplicação;
seeders : contém todos os arquivos de "seeds" (sementes que são usadas para popular o banco).
```
##### 8.2.3.2 - Configurando as credenciais do banco de dados:

> Acessar a pasta:

```console
|back-end|
    |
    |------->|src|
               |
               |------->|database|
                              |
                              |------->|config|
                  
```

> Entrar no arquivo config.js e configurar as chaves que fazer acesso ao seu banco de dados mysql,
> neste caso específico faremos essa conexão com um container docker já que estamos trabalhando com 
> micro-serviços.

##### Observação: Trabalhar sempre com variáveis de ambiente.

```console

require('dotenv').config();

module.exports = {
development:{
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect:'mysql',
}
};

```
##### 8.2.3.3 - Criando a model e a migration das tabelas reservation e login:

> Para criarmos a  model e a migration utilizando o sequelize-cli de forma automatica, utilizaremos o seguinte comando abaixo:

```console
npx sequelize-cli model:generate --name Reservation --attributes client:string,room:string,days:integer,reservationDate:date,totalPrice:integer
```

```console
 npx sequelize-cli model:generate --name Login --attributes user:string,email:string,password:string,address:string,city:string
```
##### 8.2.4 - Criando a table reservation e Login no DB MYSQ dentro de um container DOCKER:

> Comando de manipulação da estrutura do banco de dados, serão executado dentro do docker devido as variáveis de ambiente do banco que estão vinculadas dentro do container docker, conforme explicitado no docker-compose .

- [x] - Primeiramente vamos acessar o container onde esta rodando a api;

```console
docker ps
docker exec -it container-api /bin/sh
```
- [x] - Vamos criar o banco de dados dentro do container-mysql à partir do container-api que contem as variáveis de ambiente do banco de dados conforme descrito no arquivo docker-compose.yml;

```console
npx sequelize-cli db:create
```

- [x] - Vamos criar a tabela Reservations no banco de dados rodando 20220423152943-create-reservation.js;

```console
npx sequelize-cli db:migrate
```

- [x] - Modificando o escopo de reservation.js de classe para função;

```javascript

module.exports = (sequelize, DataTypes) => {

  const Reservation = sequelize.define('Reservation', {
    client: DataTypes.STRING,
    room: DataTypes.STRING,
    days: DataTypes.INTEGER,
    reservationDate: DataTypes.DATE,
    totalPrice: DataTypes.INTEGER

});

return Reservation;

}

```


- [x] - Vamos criar a tabela Logins no banco de dados rodando 20220428175057-create-login;

```console
npx sequelize-cli db:migrate
```

- [x] - Modificando o escopo de login.js de classe para função;

```javascript

module.exports = (sequelize, DataTypes) => {

  const Login = sequelize.define('Login', {
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING
});

return Login;

}

```

![Ilustração](./jwt.png)

### 9 - JWT:

#### 9.1 - O QUE É JWT ?

> Json Web Token, é um padrão para autenticação e troca de informações, definido pela RFC7519. De forma bastante
> resumida, consiste em um conjunto de solicitações. O JWT se faz essencial por ser uma forma extremamente segura
> de compartilhamento de informações e autenticação de usuários. É um formato baseado em texto e amplamente aceito 
> por diversas linguagens, característica que carrega por utilizar JSON como base.

> Esse é o grande diferencial do JWT em relação a outras opções, pois o JSON é um padrão mais vantajoso de troca e
> armazenamento de informação. Alguns dos concorrentes são o SWT (Simple Web Tokens) e o SAML (Security Assertion 
> Markup Language Tokens), que usa o padrão XML.

> O JWT é, na verdade, um dos elementos de uma estrutura ainda maior, o JOSE (Json Object Signing and Encryption). 
> No JOSE, estão contidas várias outras especificações. São elas: o JWE (Json Web Encryption), responsável pela 
> criptografia para a assinatura do token; o JWA (Json Web Algorithms), a respeito do algoritmo; JWK (Json Web Keys)
> , correspondente as chaves para assinatura; JWS (Json Web Signature), a assinatura do token. Por fim, o JWT, 
> elemento JOSE, é o token em si
> [Fonte: Blog Trybe ](https://blog.betrybe.com/tecnologia/jwt-json-web-tokens/);


### 9.2 - Instalando Pacote JWT:

- [x] - Primeiro iremos instalar o pacote npm jsonwebtoken;

```console 
npm install jsonwebtoken
```

- [x] - Instalando dotenv para trabalharmos com vaiáveis de ambiente;

```console 
npm i dotenv
```

# Thank you very much for your attention!!!
![Ilustração](./memeTheAnd.gif)