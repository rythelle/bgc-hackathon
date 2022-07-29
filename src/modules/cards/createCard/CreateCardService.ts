import { prisma } from '../../../database/prismaClient';

interface ICreateCard {
  title: string;
  body: string;
  date: Date;
  image: string;
}

export class CreateCardService {
  async execute({ title, body, date, image }: ICreateCard) {
    await prisma.cards.create({
      data: {
        title,
        body,
        date: new Date(date),
        image,
      },
    });

    return;
  }
}
