import express from 'express';
import { PublicController } from '../controllers/publicControllers';
import { tokenHandle } from '../middlewares/TokenHandle';


const controller = new PublicController();

const router = express();


router.get('/', controller.readPublics);
router.post('/', tokenHandle,controller.addPublics);
router.delete('/:id_pueblic',tokenHandle, controller.deletePublic);

export default router;