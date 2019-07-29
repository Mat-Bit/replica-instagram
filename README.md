# replica-instagram

### Créditos pela aplicação: [Rocketseat](https://github.com/Rocketseat) e [Diego Fernandes](https://github.com/diego3g)

#### Projeto cria uma réplica do aplicativo Instagram com as funcionalidades de adicionar fotos, curtir (quantas vezes quiser) alguma foto e visualizar o Feed.

## Pré-requisitos

#### NodeJS
Instalar o [NodeJS](https://nodejs.org/en/) (versão 10.16.0 LTS).

#### Yarn
Instalar o [Yarn](https://yarnpkg.com/pt-BR/).

#### MongoDB
Configurar o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ([Manual configuração](https://docs.mongodb.com/manual/installation/)).

## Backend da aplicação

#### Configuração

Acessar o diretório ```backend``` e executar os seguintes comandos em um terminal:

~~~bash
# Para dar o inicio ao projeto:
yarn init -y

# Adicionando as dependências necessárias:
yarn add express
yarn add nodemon -D
yarn add sharp
yarn add mongoose
yarn add cors
yarn add socket.io
yarn add multer
~~~

Substituir a URL do primeiro parâmetro da instrução ```mongoose.connect();``` do arquivo ```src/index.js``` pelo link gerado pelo MongoDB com o nome de um usuário e senha.

#### Rodando o Backend

Ainda no diretório ```backend``` digitar o seguinte comando no terminal:

~~~bash
# Para executar o Backend da aplicação:
yarn dev
~~~

## Aplicação Web

#### Configuração

No diretório principal do projeto ```replica-instagram``` digite o seguinte comando:

~~~bash
yarn create react-app frontend
~~~

Copie o conteúdo do diretório ```frontend_src``` e cole no diretório ```frontend/src```, substituindo o conteúdo existente.

#### Instalando as dependências

No diretório ```frontend```, execute os seguinstes comandos:

~~~bash
yarn add react-router-dom
yarn add axios
yarn add socket.io-client
yarn add styled-components
~~~

#### Executando a aplicação Web

Para executar a aplicação Web, basta acessar o diretório ```frontend``` e executar o seguinte comando em um terminal:

~~~bash
yarn start
~~~

A aplicação deve estar disponível acessando a URL <http://localhost:3000> em um navegador de sua preferência.

<!-- ## Aplicação Mobile

#### Preparando o ambiente e escolhendo um emulador:

Guia para preparar o ambiente para a aplicação mobile e instalar um emulador em sua máquina: <https://docs.rocketseat.dev/ambiente-react-native/introducao>

#### Configuração e Adicionar as dependências

Para instalar o ambiente React Native, bata abrir o terminal e digitar:

~~~bash
npm install -g react-native-cli
~~~

No diretório raiz do projeto, execute o comando:

~~~bash
react-native init insta_bit
~~~

Pode substituir o "insta_bit" por um outro nome que desejar para nomear sua aplicação mobile.

Após executar o comando acima, vá para o diretório do projeto criado e digite o comando:

~~~bash
react-native run-android

# Caso esteja simulando num dispositivo ios, execute:
react-native run-ios
~~~
 -->
