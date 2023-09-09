import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../database/config';
import { Publicaciones } from '../database/models/publicaciones';
import Boom from '@hapi/boom';

export class PublicController {
    async readPublics(req: Request, res: Response, next: NextFunction) {
        try {
            const repositorio = AppDataSource.getRepository(Publicaciones);
            const data = await repositorio.find({
                relations: {
                    users: true
                }
            });
            res.json(data);
        }
        catch(error) {
            const message = error as string;
            next(Boom.badImplementation(message));
        }
    }
}

