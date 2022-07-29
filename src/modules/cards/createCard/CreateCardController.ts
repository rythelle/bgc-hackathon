import { Request, Response } from 'express';
import { CreateCardService } from './CreateCardService';

export class CreateCardController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, body, date, image } = request.body;

    const createCardService = new CreateCardService();

    await createCardService.execute({
      title,
      body,
      date,
      image,
    });

    return response.status(201).send();
  }
}
