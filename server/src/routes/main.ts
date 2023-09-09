import express, {Express} from 'express';  
import userRouter from './usersRouter';
import publicRouter from './publicacionesRoutes';

const mainRouter = express.Router();

export function generateApi(app:Express){
    app.use('/api', mainRouter);
    mainRouter.use('/users', userRouter);
    mainRouter.use('/publicaciones', publicRouter);
    app.get('/', (req, res)=>{
        res.json({message:'Bienvenido a mi Api :)'});
    });
}