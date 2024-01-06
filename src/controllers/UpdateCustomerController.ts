// UpdateCustomerController.ts
import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
    customerId: string
  ) {
    const { name, email, status } = request.body as {
      name: string;
      email: string;
      status: boolean;
    };

    const customerService = new UpdateCustomerService();
    const customer = await customerService.execute({
      name,
      email,
      status,
      id: customerId,
    });

    reply.send(customer);
  }
}

export { UpdateCustomerController };
