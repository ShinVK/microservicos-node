import { Request, Response } from 'express'
import { CreateClientUseCase } from './create-client.usecase'

export class CreateCustomerController {
  constructor() {

  }

  async handle(request: Request, response: Response) {

    const useCase = new CreateClientUseCase()
    try {
      
      const result = await useCase.execute(request.body);

      
      return response.status(201).json(result);
    } catch (err: unknown) {
       if (err instanceof Error) { // Verificando se 'err' é uma instância de 'Error'
        return response.status(400).json({ error: err.message });
      } else {
        return response.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}