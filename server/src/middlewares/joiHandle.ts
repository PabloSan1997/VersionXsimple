import {Request, Response, NextFunction} from 'express';
import {Schema} from 'joi';
import Boom from '@hapi/boom';

type Propiedad = 'body';

export function joiHandle(schema:Schema, prop:Propiedad){
    return(req: Request, res:Response, next:NextFunction)=>{
        const obtener = req[prop];
        console.log(obtener);
        const {error} = schema.validate(obtener, {abortEarly:false});
        if(error){
            throw Boom.badRequest(error.message);
        }
        next();
    }
}