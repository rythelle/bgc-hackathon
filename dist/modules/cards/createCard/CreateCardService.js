"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCardService = void 0;

var _prismaClient = require("../../../database/prismaClient");

class CreateCardService {
  async execute({
    title,
    body,
    date,
    image
  }) {
    await _prismaClient.prisma.cards.create({
      data: {
        title,
        body,
        date: new Date(date),
        image
      }
    });
    return;
  }

}

exports.CreateCardService = CreateCardService;