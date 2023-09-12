import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
import { UserAdd, LoginUser } from '../main';
import { hash, compare } from 'bcrypt';
import { AppDataSource } from '../database/config';
import { Users } from '../database/models/users';
import { tokenJwt } from '../utilities/tokens';



export class UserController {
	async readPublicsByUser(req: Request, res: Response, next: NextFunction){
		try {
			const repositorio = AppDataSource.getRepository(Users);
			const {id_user} = req.params as {id_user:string};
			const usuario = await repositorio.findOne({
				where:{
					id_user
				},
				relations:{
					publicaciones:true
				}
			});
			if(!usuario){
				throw 'No se encontro ususario';
			}
			const mostrar = {
				id_user:usuario.id_user,
				email:usuario.email,
				name:usuario.name,
				publicaciones:usuario.publicaciones.reverse()
			};
			res.json(mostrar);

		} catch (error) {
			const message = error as string;
			next(Boom.notFound(message));
		}
	}
	async addUser(req: Request, res: Response, next: NextFunction) {
		try {
			const newUser = req.body as UserAdd;
			const password = await hash(newUser.password, 8);
			const repositorio = AppDataSource.getRepository(Users);
			const usuario = new Users();
			usuario.email = newUser.email;
			usuario.name = newUser.name;
			usuario.password = password;
			await repositorio.manager.save(usuario);
			res.status(201).json({ message: 'Se agrego usuario nuevo' });
		} catch (error) {
			const message = error as string | Error | undefined;
			next(Boom.badRequest(message));
		}
	}
	async loginUser(req: Request, res: Response, next: NextFunction) {
		try {
			const newUser = req.body as LoginUser;
			const repositorio = AppDataSource.getRepository(Users);
			const user = await repositorio.findOne({ where: { email: newUser.email } });
			if (!user) {
				throw 'Error con el usuario o contraseña';
			}
			const comparar = await compare(newUser.password, user.password);
			if (!comparar) {
				throw 'Error con el usuario o contraseña';
			}
			user.password = await hash(newUser.password, 7);
			const clonar = {
				...user
			};
			const token = await tokenJwt.generar(clonar);
			await repositorio.update({ id_user: user.id_user }, user);
			res.json({ ...token, permiso: true, name:user.name, id_user:user.id_user });
		} catch (error) {
			const message = error as string | Error | undefined;
			next(Boom.badRequest(message));
		}
	}
	async loginToken(req: Request, res: Response, next: NextFunction) {
		try {
			const { token } = req.body as { token: string };
			const user =  await tokenJwt.verificar(token);
			res.json({ token, permiso: true, name:user.name, id_user:user.id_user });
		} catch (error) {
			const message = error as string | Error | undefined;
			next(Boom.badRequest(message));
		}
	}
}

