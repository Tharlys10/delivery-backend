import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";


class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateClientUseCase = new AuthenticateClientUseCase();
    const session = await authenticateClientUseCase.execute({ username, password });

    return response.status(201).json(session)
  }
}

export { AuthenticateClientController }