# CORELAB API

## Configurações iniciais:

## Instalando dependências do projeto

O projeto está utilizando o package manager 'npm' para lidar com os pacotes no node.
<br />
Para baixar as dependencias do projeto basta rodar o comando: `npm install`
<br/>

## Configurando variáveis de ambiente

Após clonar o projeto, Crie um arquivo `.env` na raíz do projeto. Em seguida copie tudo que esta dentro do arquivo `.env.example` e cole no arquivo `.env` <br />

Exemplo:

```
NODE_ENV=dev
DATABASE_URL="postgresql://docker:docker@localhost:5432/codelabapi?schema=public
```

## Iniciando container

Inicie o container docker com `docker compose up -d`

## Gerando esquema do Prisma e criando a estrutura do banco

Para gerar o esquema do Prisma assim como a estrutura no banco de dados, basta rodar o comando: `npx prisma db push`.

Agora também deve rodar somente o comando `npx prisma generate` para gerar o esquema do prisma.

## Rodando os testes

Para rodar os testes execute `npm run test` no terminal ou `npm run test:watch` para executar em modo de watch

## Rodando o projeto

Para rodar o projeto utilize o script `npm run dev`
