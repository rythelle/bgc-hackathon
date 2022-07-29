"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImagesController = void 0;

var _UploadImagesService = require("./UploadImagesService");

class UploadImagesController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const image = request.file;
    const uploadImagesUseCase = new _UploadImagesService.UploadImagesService();
    await uploadImagesUseCase.execute({
      id,
      images_name: image === null || image === void 0 ? void 0 : image.filename
    });
    return response.status(201).send();
  }

}

exports.UploadImagesController = UploadImagesController;