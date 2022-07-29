import { Request, Response } from 'express';
import { ListCardsService } from './ListCardsService';

export class ListCardsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCardsService = new ListCardsService();

    const cards = await listCardsService.execute();

    return response.json(cards);
  }
}
