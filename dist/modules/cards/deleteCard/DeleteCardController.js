"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteCardController = void 0;

var _DeleteCardService = require("./DeleteCardService");

class DeleteCardController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const deleteCardService = new _DeleteCardService.DeleteCardService();
    await deleteCardService.execute(id);
    return response.status(200).send();
  }

}

exports.DeleteCardController = DeleteCardController;