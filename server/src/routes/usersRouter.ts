import express from 'express';
import { UserController } from '../controllers/userControllers';
import { joiHandle } from '../middlewares/joiHandle';
import { addUserSchema, logginTokenSchema, loginUserSchema } from '../middlewares/joiSchemas/usersSchema';

const router = express();
const controller = new UserController();

router.get('/:id_user', controller.readPublicsByUser);
router.post('/addUser',joiHandle(addUserSchema, 'body'), controller.addUser);
router.post('/login', joiHandle(loginUserSchema, 'body') ,controller.loginUser);
router.post('/loginToken', joiHandle(logginTokenSchema, 'body'),controller.loginToken);
export default router;