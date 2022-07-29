import { prisma } from '../../../database/prismaClient';
import cloudinary from 'cloudinary';
import { resolve } from 'path';
interface IRequest {
  id: string;
  images_name: string;
}

export class UploadImagesService {
  async execute({ id, images_name }: IRequest): Promise<void> {
    const tmpFolder = resolve(__dirname, '..', '..', '..', 'tmp');

    cloudinary.v2.uploader.upload(`${tmpFolder}/${images_name}`, { upload_preset: 'my_preset' }, (error, result) => {
      console.log(result, error);
    });

    await prisma.cards.update({
      data: {
        image_path: `${tmpFolder}/${images_name}`,
      },
      where: {
        id,
      },
    });

    return;
  }
}
