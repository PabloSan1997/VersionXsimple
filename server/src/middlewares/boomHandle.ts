import {Request, Response, NextFunction} from 'express';
import {Boom} from '@hapi/boom';

export function boomHandle(error:Boom ,req: Request, res:Response, next:NextFunction){
	if(error.isBoom){
		const estadoError = error.output.payload;
		res.status(estadoError.statusCode).json(estadoError);
	}
	next(error);
}