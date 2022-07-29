import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import { CreateCardController } from './modules/cards/createCard/CreateCardController';
import { DeleteCardController } from './modules/cards/deleteCard/DeleteCardController';
import { FindCardController } from './modules/cards/findCard/FindCardController';
import { ListCardsController } from './modules/cards/listCards/ListCardsController';
import { UploadImagesController } from './modules/cards/uploadImage/UploadImagesController';

const routes = Router();

const upload = multer(uploadConfig);

const createCardController = new CreateCardController();
const findCardController = new FindCardController();
const deleteCardController = new DeleteCardController();
const listCardsController = new ListCardsController();
const uploadImagesController = new UploadImagesController();

routes.post('/card', createCardController.handle);

routes.get('/card/:title', findCardController.handle);

routes.delete('/card/:id', deleteCardController.handle);

routes.get('/listCards', listCardsController.handle);

routes.post('/image/:id', upload.single('image'), uploadImagesController.handle);

export { routes };
