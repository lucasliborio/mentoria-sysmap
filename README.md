# Mentoria SysMap

- Esse projeto foi realizado durante a mentoria da empresa SysMap.

## String check

- **string check** é uma aplicação que checa analisa uma **string** que deve conter somente letras e numeros e retorna como resultado dois arrays, um de numeros e outro de letras que foram encotradas nessa string.

```js
// input 
{
  "data": "12345abc"
}
// output
{
  numbers:[1,2,3,4,5]
  letters:["a", "b", "c"]
}
```

## Instalação

```bash
npm install
```

## Rodando a aplicação

Para rodar a aplicação temos algumas alternativas. Vamos as opções:

#### Utilizando o proprio NestJS - porta 3000

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

```curl

curl --request POST \
  --url http://localhost:3000/string-check/result \
  --header 'Content-Type: application/json' \
  --data '{
 "data": ""
}'
```

#### Utilizando AWS SAM - [Necessario instalar AWS SAM CLI](https://docs.aws.amazon.com/pt_br/serverless-application-model/latest/developerguide/install-sam-cli.html)

- O **AWS SAM** possui algumas formas de testar os recursos que irão subir pro **AWS CloudFormation**

**Obs.:** Após instalar o **AWS SAM** necessario rodar o comando abaixo parar buildar o codigo da aplicação para dentro do folder **.aws-sam**

```bash
# Deixa a aplicação pronta para teste e deploy 
$ npm run prepare:deploy
```

- Após rodar o comando acima a aplicação fica pronta para ser testada.

```bash

# execute e teste sua função AWS serverless localmente como uma API HTTP
$ sam local start-api

# envia mensagem direto para o lambda
$ sam local invoke -e events/string-check.json
```

- Para simular recursos da AWS localmente o **AWS SAM CLI** utiliza containers **Docker** - **[Instalação Docker](https://docs.docker.com/engine/install/)**
- Qualquer duvida a respeito do **AWS SAM CLI** - **[AWS SAM CLI Docs](https://docs.aws.amazon.com/pt_br/serverless-application-model/latest/developerguide/using-sam-cli.html)**

## Deploy

- Para realizar o deploy é simples, após ter rodado o comando **npm run prepare:deploy** execute:

```bash
# Recomendavel na primeira vez
$ sam deploy --guided
```

- No final do deploy uma url para o API Gateway será gerada.

```curl
curl --request POST \
  --url https:url-gerada-no-deploy/string-check/result \
  --header 'Content-Type: application/json' \
  --data '{
 "data": ""
}'
```

* Para derrubar stack da **AWS Cloud Formation** basta executar o comando no diretorio do projeto:

```bash
sam delete
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
