# Client System API


## Tecnologias 

- Node.js
- TypeScript
- Fastify
- MongoDB


## Model

<pre>
Customer {
  id         String    @id @default(auto()) @map("_id") @db.ObjectId
  name       String
  email      String
  status     Boolean
  created_at DateTime? @default(now())
  updated_at DateTime? @default(now())

  @@map("customers")
}</pre>

## Rotas

- GET /customers - retorna todos os clientes cadastrados
- POST /customer - cadastra um cliente
- PUT /customer/:id - atualiza um cliente
- DELETE /customer/id= - deleta um cliente

## Front-End
- https://github.com/paulopariz/client-system-front

## Testes no Postman
https://www.loom.com/share/e1b3077efd5d4530a797845fc7a15727?sid=d8862966-081b-4d16-8a72-0af9b31ebe44
