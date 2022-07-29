import { prisma } from '../../../database/prismaClient';

interface IRequest {
  id: string;
  images_name: string;
}

export class UploadImagesService {
  async execute({ id, images_name }: IRequest): Promise<void> {
    await prisma.cards.update({
      data: {
        image_path: images_name,
      },
      where: {
        id,
      },
    });

    return;
  }
}
