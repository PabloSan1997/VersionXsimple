import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
import { tokenJwt } from '../utilities/tokens';
import { UserId } from '../main';


export async function tokenHandle(req: Request, res: Response, next: NextFunction) {
	try {
		const { token } = req.headers as { token: string };

		if (!token) {
			throw 'No tienes permiso para esta accion';
		}
        await tokenJwt.verificar(token) as UserId;
        next();
	} catch (error) {
		const message = error as Error | string;
		next(Boom.badRequest(message));
	}
}