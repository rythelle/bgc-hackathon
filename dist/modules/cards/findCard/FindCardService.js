"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindCardService = void 0;

var _prismaClient = require("../../../database/prismaClient");

class FindCardService {
  async execute(title) {
    const card = await _prismaClient.prisma.cards.findFirst({
      where: {
        title
      }
    });
    return card || {};
  }

}

exports.FindCardService = FindCardService;