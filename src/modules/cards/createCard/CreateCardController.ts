import { Request, Response } from 'express';
import { CreateCardService } from './CreateCardService';

export class CreateCardController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, body, date, image_path } = request.body;

    const createCardService = new CreateCardService();

    await createCardService.execute({
      title,
      body,
      date,
      image_path,
    });

    return response.status(201).send();
  }
}
