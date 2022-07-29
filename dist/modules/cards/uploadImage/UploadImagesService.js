"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImagesService = void 0;

var _prismaClient = require("../../../database/prismaClient");

class UploadImagesService {
  async execute({
    id,
    images_name
  }) {
    await _prismaClient.prisma.cards.update({
      data: {
        image_path: images_name
      },
      where: {
        id
      }
    });
    return;
  }

}

exports.UploadImagesService = UploadImagesService;