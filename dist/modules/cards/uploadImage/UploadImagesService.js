"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImagesService = void 0;

var _prismaClient = require("../../../database/prismaClient");

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UploadImagesService {
  async execute({
    id,
    images_name
  }) {
    const tmpFolder = (0, _path.resolve)(__dirname, '..', '..', '..', 'tmp');

    _cloudinary.default.v2.uploader.upload(`${tmpFolder}/${images_name}`, {
      upload_preset: 'my_preset'
    }, (error, result) => {
      console.log(result, error);
    });

    await _prismaClient.prisma.cards.update({
      data: {
        image_path: `${tmpFolder}/${images_name}`
      },
      where: {
        id
      }
    });
    return;
  }

}

exports.UploadImagesService = UploadImagesService;