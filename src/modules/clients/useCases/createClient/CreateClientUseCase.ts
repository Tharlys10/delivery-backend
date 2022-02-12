import { Clients } from '@prisma/client';
import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";

class CreateClientUseCase {
  async execute({ username, password }: ICreateClientDTO): Promise<Clients> {
    // find client with username
    const client_already_exist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive'
        }
      }
    });

    if (client_already_exist) {
      throw new Error("client already exists");
    }

    // crypto password
    const password_hash = await hash(password, 10);

    // create client
    const client = await prisma.clients.create({
      data: {
        username,
        password: password_hash
      }
    });

    return client;
  }
}

export { CreateClientUseCase }