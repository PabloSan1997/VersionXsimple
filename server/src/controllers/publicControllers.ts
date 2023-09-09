import {Request, Response, NextFunction} from 'express';
import { AppDataSource } from '../database/config';
import { Publicaciones } from '../database/models/publicaciones';

export class PublicController{
    async readPublics(req: Request, res:Response, next:NextFunction){
        const repositorio = AppDataSource.getRepository(Publicaciones);
        const data = await repositorio.find({
            relations:{
                users:true
            }
        });
        res.json(data);
    }
}