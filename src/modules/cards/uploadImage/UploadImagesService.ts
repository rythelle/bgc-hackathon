import { prisma } from '../../../database/prismaClient';
import cloudinary from 'cloudinary';
import { resolve } from 'path';
interface IRequest {
  id: string;
  images_name: string;
}

export class UploadImagesService {
  async execute({ id, images_name }: IRequest): Promise<void> {
    const tmpFolder = resolve(__dirname, '..', '..', '..', '..', 'tmp');

    await cloudinary.v2.uploader
      .upload(`${tmpFolder}\\${images_name}`)
      .then(async (result) => {
        await prisma.cards.update({
          data: {
            image_path: result.url,
          },
          where: {
            id,
          },
        });
      })
      .catch((error) => console.log(error));

    return;
  }
}
