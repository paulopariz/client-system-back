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
- DELETE /customer - deleta um cliente

