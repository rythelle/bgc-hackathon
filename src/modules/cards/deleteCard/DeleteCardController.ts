import { Request, Response } from 'express';
import { DeleteCardService } from './DeleteCardService';

export class DeleteCardController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCardService = new DeleteCardService();

    await deleteCardService.execute(id);

    return response.status(200).send();
  }
}
