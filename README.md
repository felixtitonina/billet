> 🚧  Desafio validador billet  🚧

API, consultar linhas digitáveis de boleto de título bancário
e pagamento de concessionárias, verificando se a mesma é válida ou não. Sendo válida e
possuindo valor e/ou data de vencimento ter o retorno desses dados.


## Indice

* <p><a href="#pré-requisitos">Pré Requisitos</a> </p>
* <p><a href="#iniciando-projeto">Iniciando Projeto</a></p>
* <p><a href="#rotas">Rotas</a></p>
* <p><a href="#executando-os-testes">Executando os testes</a></p>
* <p><a href="#relatório-de-cobertura-de-testes">Relatório de cobertura de Testes</a></p>
* <p><a href="#autor">Autor</a></p>




## Pré Requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)
(

Além disso, é bom ter um editor para trabalhar com o código como: [VSCode](https://code.visualstudio.com/)



## Iniciando Projeto 

### Local

```bash
# Clone este repositório
$ git clone https://github.com/felixtitonina/billet.git
# Acesse a pasta do projeto no terminal / cmd
$ cd billet

# Instale as dependências
$ npm install

or

$ yarn

# Rode o projeto
$ npm run start

or 

$ yarn start


# Server is running:8080 - acesse <http://localhost:8080>
```


## Rotas para testes

| Rotas  |  HTTP Method  | Params  |  Desccrição  |
| :---: | :---: | :---: | :---: |
|  /boleto/:digitoBoleto |  GET |  -  | Valida o boleto |

```bash
Exemplo de uso: 
[GET]
localhost:8080/boleto/836800000017 100400730071 805521786006 003449999709

```
## Testes de Requisições

### Via Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9219651-bc995084-92d8-4a4f-9ce3-825f49b5130a?action=collection%2Ffork&collection-url=entityId%3D9219651-bc995084-92d8-4a4f-9ce3-825f49b5130a%26entityType%3Dcollection%26workspaceId%3D134fc0b4-243d-41ce-aa62-254e94f4bdde)


## Executando os testes

[Jest](https://jestjs.io/) foi a escolha de testar o projeto, para executar:

```bash

$ yarn test

```





## Autor


Feito com [Felix Tito](https://github.com/WallaceMachado) 🚀🏽 Entre em contato!

[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/felix-tito-nina/)
