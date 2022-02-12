import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from "../../../../database/prismaClient";
import { ICreateSessionDTO } from "../../dtos/ICreateSessionDTO";
import { IResponseSessionDTO } from '../../dtos/IResponseSessionDTO';

class AuthenticateClientUseCase {
  async execute({username, password}: ICreateSessionDTO): Promise<IResponseSessionDTO> {
    const secret_token = process.env.APP_SECRET_TOKEN_SESSION;
    const expires_in_token = process.env.APP_EXPIRE_TOKEN_SESSION;

    // find client with username
    const client_already_exist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive'
        }
      }
    });

    if (!client_already_exist) {
      throw new Error("username or password incorrect");
    }

    const compare_password = compare(password, client_already_exist.password);

    if (!compare_password) {
      throw new Error("username or password incorrect");
    }

    const token =  sign({}, secret_token as string, {
      subject: client_already_exist.id,
      expiresIn: expires_in_token
    });

    const session: IResponseSessionDTO = {
      username: client_already_exist.username,
      token
    }

    return session;
  }
}

export { AuthenticateClientUseCase }