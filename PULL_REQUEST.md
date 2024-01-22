## Tecnologias usadas

-   Node - Ambiente de execução javascript
-   Fastify - Framework do NodeJS
-   Typescript - Linguagem de programação
-   Prisma - ORM que facilita a integração com banco de dados
-   Docker - Plataforma para auxiliar o desenvolvimento utilizando containers
-   Zod - Biblioteca de validações
-   Vitest - Biblioteca para criação de testes unitarios
-   Dotenv - Biblioteca para configuração de variáveis ambiente

## Features

-   É possível criar uma nota, passando titulo, descrição, cor e se esta favoritada ou não.
-   É possível editar qualquer campo de uma nota.
-   É possível favoritar uma nota.

## Detalhes técnicos

-   Nessa api utilizei diversos patterns conhecidos no mercado como 'repository pattern', 'factory pattern', 'use case pattern' dentre outros.
-   Busquei aplicar alguns conceitos SOLID, principalmente o 'Single reponsability principle' para manter um código limpo e escaçável.
-   Utilizei um container postgres para utilização do banco de dados.
-   Desenvolvi testes unitários para cada caso de uso da aplicação garantindo que ela esteja funcionando corretamente++

Video: https://www.youtube.com/watch?v=YA-P5tjx4M8
