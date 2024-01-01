import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const list = new ListCustomerService();

    const customers = await list.execute();

    reply.send(customers);
  }
}

export { ListCustomerController };
