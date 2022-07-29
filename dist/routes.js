"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../config/upload"));

var _CreateCardController = require("./modules/cards/createCard/CreateCardController");

var _DeleteCardController = require("./modules/cards/deleteCard/DeleteCardController");

var _FindCardController = require("./modules/cards/findCard/FindCardController");

var _ListCardsController = require("./modules/cards/listCards/ListCardsController");

var _UploadImagesController = require("./modules/cards/uploadImage/UploadImagesController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
exports.routes = routes;
const upload = (0, _multer.default)(_upload.default);
const createCardController = new _CreateCardController.CreateCardController();
const findCardController = new _FindCardController.FindCardController();
const deleteCardController = new _DeleteCardController.DeleteCardController();
const listCardsController = new _ListCardsController.ListCardsController();
const uploadImagesController = new _UploadImagesController.UploadImagesController();
routes.post('/card', createCardController.handle);
routes.get('/card/:title', findCardController.handle);
routes.delete('/card/:id', deleteCardController.handle);
routes.get('/listCards', listCardsController.handle);
routes.post('/image/:id', upload.single('image'), uploadImagesController.handle);