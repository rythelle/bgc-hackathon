import { prisma } from '../../../database/prismaClient';

export class FindCardService {
  async execute(title: string) {
    const card = await prisma.cards.findFirst({
      where: {
        title,
      },
    });

    return card || {};
  }
}
