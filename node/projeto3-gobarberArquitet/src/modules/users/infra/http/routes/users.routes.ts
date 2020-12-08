import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);




// Patch quando alterar apenas um dado
// Put quando permite alterar todos os dados
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),

  userAvatarController.update,

);

export default usersRouter;
