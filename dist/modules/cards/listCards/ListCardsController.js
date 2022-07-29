"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCardsController = void 0;

var _ListCardsService = require("./ListCardsService");

class ListCardsController {
  async handle(request, response) {
    const listCardsService = new _ListCardsService.ListCardsService();
    const cards = await listCardsService.execute();
    return response.json(cards);
  }

}

exports.ListCardsController = ListCardsController;