import express from 'express';
import { UserController } from '../controllers/userControllers';

const router = express();
const controller = new UserController();

router.post('/addUser', controller.addUser);
router.post('/login', controller.loginUser);
router.post('/loginToken', controller.loginToken);
export default router;