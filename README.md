# replica-instagram

### Créditos pela aplicação: [Rocketseat](https://github.com/Rocketseat) e [Diego Fernandes](https://github.com/diego3g).


## Pré-requisitos:

#### NodeJS
Instalar o [NodeJS](https://nodejs.org/en/) (versão 10.16.0 LTS).

#### Yarn
Instalar o [Yarn](https://yarnpkg.com/pt-BR/).



## Rodando o Backend da aplicação:

Acessar a pasta ```backend``` e executar os seguintes comandos em um terminal:
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

Substituir a URL do primeiro parâmetro da instrução ``` mongoose.connect(); ``` do arquivo ``` src/index.js ``` pelo link gerado pelo MongoDB com o nome de um usuário e senha.
Manual para configurar um cluster no MongoDB Atlas: <https://docs.mongodb.com/manual/installation/>

~~~bash
# Para executar o Backend da aplicação:
yarn dev
~~~


<!-- ## Rodando a aplicação Web:

Acessar a pasta ```frontend``` e executar o comando em outro terminal:
~~~bash
yarn start
~~~
A aplicação deve estar disponível acessando a URL <http://localhost:3000> em um navegador de sua preferência. -->


