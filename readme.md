# CORELAB API

## Configurações iniciais:

## Instalando dependências do projeto

O projeto está utilizando o package manager 'npm' para lidar com os pacotes no node, sendo assim, para baixar as dependencias do projeto basta rodar o comando: `npm install`
<br/>

## Configurando variáveis de ambiente

Após clonar o projeto, Crie um arquivo `.env` na raíz do projeto. Em seguida copie tudo que esta dentro do arquivo `.env.example` e cole no arquivo `.env` <br />

Exemplo:

```
NODE_ENV=dev
DATABASE_URL="postgresql://docker:docker@localhost:5432/codelabapi?schema=public
```

## Gerando esquema do Prisma e criando a estrutura do banco

Para gerar o esquema do Prisma assim como a estrutura no banco de dados, basta rodar o comando: `npx prisma db push`.

Agora também deve rodar somente o comando `npx prisma generate` para gerar o esquema do prisma.

## Rodando o projeto

Para rodar o projeto utilize o script `npm run dev`
