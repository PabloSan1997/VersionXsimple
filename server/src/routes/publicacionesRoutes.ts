import express from 'express';
import { PublicController } from '../controllers/publicControllers';
import { tokenHandle } from '../middlewares/TokenHandle';
import { joiHandle } from '../middlewares/joiHandle';
import { addMEssageSchema, editMessageSchema } from '../middlewares/joiSchemas/publicacionSchema';


const controller = new PublicController();

const router = express();


router.get('/', controller.readPublics);
router.get('/:id_pueblic', controller.readOnePublic);
router.post('/', tokenHandle, joiHandle(addMEssageSchema, 'body'), controller.addPublics);
router.delete('/:id_pueblic',tokenHandle, controller.deletePublic);
router.patch('/', tokenHandle, joiHandle(editMessageSchema, 'body'),controller.editPublic);
export default router;