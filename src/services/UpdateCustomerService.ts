import prismaClient from "../prisma";

interface UpdateCustomerProps {
  name: string;
  email: string;
  status: boolean;
  id: string;
}

class UpdateCustomerService {
  async execute({ name, email, status, id }: UpdateCustomerProps) {
    if (!name || !email || status === null || !id) {
      throw new Error("Preencha todos os campos");
    }

    const customer = await prismaClient.customer.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        status,
      },
    });

    return customer;
  }
}

export { UpdateCustomerService };
