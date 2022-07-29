"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCardsService = void 0;

var _prismaClient = require("../../../database/prismaClient");

class ListCardsService {
  async execute() {
    const cards = await _prismaClient.prisma.cards.findMany();
    return cards || [];
  }

}

exports.ListCardsService = ListCardsService;