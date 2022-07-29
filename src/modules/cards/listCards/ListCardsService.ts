import { prisma } from '../../../database/prismaClient';

export class ListCardsService {
  async execute() {
    const cards = await prisma.cards.findMany();

    return cards || [];
  }
}
