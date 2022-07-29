"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCardController = void 0;

var _CreateCardService = require("./CreateCardService");

class CreateCardController {
  async handle(request, response) {
    const {
      title,
      body,
      date,
      image
    } = request.body;
    const createCardService = new _CreateCardService.CreateCardService();
    await createCardService.execute({
      title,
      body,
      date,
      image
    });
    return response.status(201).send();
  }

}

exports.CreateCardController = CreateCardController;