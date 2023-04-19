# API - Sistema de estoque

Esta é uma API RESTful de um sistema de estoque.

[Documentação no Swagger](https://api-inventory.onrender.com/api-docs/)

## Tecnologias

- [Typescript](https://github.com/matiassingers/awesome-readme)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Celebrate](https://github.com/arb/celebrate)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Swagger](https://swagger.io/)

## Configuração para rodar a API

Comando para instalar as dependências

```bash
  yarn
```

Comando para gerar o Prisma Client

```bash
  yarn prisma generate
```

Comando para rodar as migrations

```bash
  yarn prisma migrate dev
```

Comando para rodar a API

```bash
  yarn dev
```

## Sobre API

Classes:

- Product
- Supplier
- Address
- SupplierOnProduct
- InventoryItem
- Inventory

Use cases:

- Criar produto
- Listar produtos
- Encontrar produto
- Deletar produto
- Atualizar informações do produto
- Encontrar produto por data de validade
- Encontrar produto por data de fabricação
- Criar fornecedor
- Listar fornecedores
- Encontrar fornecedor
- Deletar fornecedor
- Adicionar endereço ao fornecedor
- Atribuir produto ao fornecedor
- Criar inventário
- Listar inventários
- Encontrar enventário
- Mudar o nome do inventário
- Adicionar produto ao inventário
- Listar todos os produtos de um inventário
- Listar todos os produtos de um inventário por data de validade
- Listar todos os produtos de um inventário com o estoque baixo (Abaixo de 50)
- Adicionar a quantidade de um determinado produto de um inventário
