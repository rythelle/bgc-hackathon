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
    image_path
  }) {
    await _prismaClient.prisma.cards.create({
      data: {
        title,
        body,
        date: new Date(date),
        image_path
      }
    });
    return;
  }

}

exports.CreateCardService = CreateCardService;