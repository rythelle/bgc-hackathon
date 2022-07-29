"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteCardService = void 0;

var _prismaClient = require("../../../database/prismaClient");

class DeleteCardService {
  async execute(id) {
    await _prismaClient.prisma.cards.delete({
      where: {
        id
      }
    });
    return;
  }

}

exports.DeleteCardService = DeleteCardService;