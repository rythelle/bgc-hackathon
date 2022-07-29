import { prisma } from '../../../database/prismaClient';

export class DeleteCardService {
  async execute(id: string): Promise<void> {
    await prisma.cards.delete({
      where: {
        id,
      },
    });

    return;
  }
}
