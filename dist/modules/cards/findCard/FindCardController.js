"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindCardController = void 0;

var _FindCardService = require("./FindCardService");

class FindCardController {
  async handle(request, response) {
    const {
      title
    } = request.params;
    const findCardService = new _FindCardService.FindCardService();
    const card = await findCardService.execute(title);
    return response.json(card);
  }

}

exports.FindCardController = FindCardController;