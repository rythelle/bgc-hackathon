import { prisma } from '../../../database/prismaClient';

interface ICreateCard {
  title: string;
  body: string;
  date: Date;
  image_path: string;
}

export class CreateCardService {
  async execute({ title, body, date, image_path }: ICreateCard) {
    await prisma.cards.create({
      data: {
        title,
        body,
        date,
        image_path,
      },
    });

    return;
  }
}
