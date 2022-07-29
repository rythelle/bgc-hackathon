import { Request, Response } from 'express';
import { FindCardService } from './FindCardService';

export class FindCardController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.params;

    const findCardService = new FindCardService();

    const card = await findCardService.execute(title);

    return response.json(card);
  }
}
