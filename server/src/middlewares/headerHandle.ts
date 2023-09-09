import {Request, Response, NextFunction} from 'express';
import { variables } from '../config/variables';
import boom from '@hapi/boom';

export function headerHandle(req: Request, res:Response, next:NextFunction){
    const {entrada} = req.headers as {entrada:string};
    if(entrada!==variables.HEADER_ASSES){
        throw boom.badRequest('No tienes permiso para usar esta api');
    }
    next();
}