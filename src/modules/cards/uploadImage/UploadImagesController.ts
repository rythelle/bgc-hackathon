import { Request, Response } from 'express';
import { UploadImagesService } from './UploadImagesService';

interface IFile {
  filename: string;
}
export class UploadImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const image = request.file as IFile;

    const uploadImagesUseCase = new UploadImagesService();

    await uploadImagesUseCase.execute({
      id,
      images_name: image?.filename,
    });

    return response.status(201).send();
  }
}
