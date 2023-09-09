import express from 'express';
import { PublicController } from '../controllers/publicControllers';

const controller = new PublicController();

const router = express();

router.get('/', controller.readPublics);


export default router;