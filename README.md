# Olá, um projeto besta com vue

Comecei esse pequeno projeto para aprender um pouco mais sobre Vue.js e outras coisinhas.

## Docker

Bem, um projeto com Vue.JS com docker é possível, mantendo tudo que tem de legal e deixando o ambiente isolado.
A partir deste [link do Joost Döbken](https://medium.com/@jwdobken/vue-with-docker-initialize-develop-and-build-51fad21ad5e6) eu comecei montando o ambiente.

Só adicionei umas paradas como um arquivo .env onde mantém a UID do host para na hora da criação do container os sistemas de arquivos se conversar.

> Se você quer começar um projeto novo, do zero, use o comando a seguir

```
mkdir myproject && cd "$_" && docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it node:lts-alpine sh -c "yarn global add @vue/cli && vue create ."
```

### Construindo o container

Antes de qualquer coisa, você deve construir o container, no arquivo docker-compose.yml tem as configurações indicando que será construida a imagem para o ambiente de desenvolvimento, que já pega as dependências e roda yarn install.

```
    docker-compose build 
```

### Rodando o projeto

O comando abaixo sobe o container e roda yarn serve para que a aplicação construída com Vue.js tenha vida.

```
    docker-compose up
```

## Vue.JS

Adicionando dependências ao projeto, como no exemplo abaixo eu adicionei o VueRouter

``` 
    docker-compose exec frontend yarn add vue-router
```

## CSS

Eu sempre quis iniciar um pequeno projeto usando o Bulma, então dessa vez comecei dessa forma

``` 
    docker-compose exec frontend yarn add bulma
```