# Testes de Performance - EBAC

Este projeto contém testes de performance para a API EBAC Demo Store Server.

## Ferramenta utilizada
- K6

## Endpoints testados
- Produtos
- Clientes

## Cenários
- 10 usuários simultâneos (VUs)
- Duração de 30 segundos
- Validação de status HTTP 200
- Tempo de resposta inferior a 1000ms
- Taxa de erro menor que 5%

## Execução

Com a API rodando localmente:

```bash
k6 run tests/produtos.test.js
k6 run tests/clientes.test.js

```md
Para subir a API:

```bash
git clone https://github.com/EBAC-QE/ebac-demo-store-server
cd ebac-demo-store-server
npm install
npm start