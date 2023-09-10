import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../database/config';
import { Publicaciones } from '../database/models/publicaciones';
import Boom from '@hapi/boom';
import { tokenJwt } from '../utilities/tokens';
import { PublicAdd, PublicFull, PublicUser, EditPublic } from '../main';

export class PublicController {
    async readPublics(req: Request, res: Response, next: NextFunction) {
        try {
            const repositorio = AppDataSource.getRepository(Publicaciones);
            const data = await repositorio.find({
                relations: {
                    users: true
                }
            });
            const mostrar = data.map(elemento => {
                const usuario = elemento.users;
                const mostrarUsuario = {
                    id_user: usuario.id_user,
                    name: usuario.name
                }
                return {
                    ...elemento,
                    users: mostrarUsuario
                }
            });
            res.json(mostrar.reverse());
        }
        catch (error) {
            const message = error as string;
            next(Boom.badImplementation(message));
        }
    }
    async addPublics(req: Request, res: Response, next: NextFunction) {
        try {
            const { token } = req.headers as { token: string };
            const usuario = await tokenJwt.verificar(token);
            const repositorio = AppDataSource.getRepository(Publicaciones);
            const newPublic = req.body as PublicAdd;
            const publicacion = new Publicaciones();
            publicacion.message = newPublic.message;
            publicacion.users = usuario;
            await repositorio.manager.save(publicacion);
            res.status(201).json({ message: 'Publicacion agregada', publicacion });
        } catch (error) {
            const message = error as string;
            next(Boom.badImplementation(message));
        }
    }
    async editPublic(req: Request, res: Response, next: NextFunction) {
        try {
            const messageEdit = req.body as EditPublic;
            const repositorio = AppDataSource.getRepository(Publicaciones);
            const {token} = req.headers as { token: string };
            const usuario = await tokenJwt.verificar(token);
            const message = await repositorio.findOne({
                where:{
                    id_pueblic:messageEdit.id_pueblic
                },
                relations:{
                    users:true
                }
            });

            if(!message || usuario.id_user!==message.users.id_user){
                throw 'No tienes permiso para esta accion'
            }
            await repositorio.update({id_pueblic:message.id_pueblic}, {message:messageEdit.message});
            res.json({message:"Se edito elemento con exito"});
        } catch (error) {
            const message = error as string;
            next(Boom.badRequest(message));
        }
    }

    async deletePublic(req: Request, res: Response, next: NextFunction) {
        try {
            const { token } = req.headers as { token: string };
            const { id_pueblic } = req.params as { id_pueblic: string };
            const usuario = await tokenJwt.verificar(token);
            const repositorio = AppDataSource.getRepository(Publicaciones);
            const publicacion = await repositorio.findOne({
                where: {
                    id_pueblic
                },
                relations: {
                    users: true
                }
            });
            console.log(publicacion);
            if (publicacion?.users.id_user !== usuario.id_user) {
                throw 'No tienes permiso para esta acción'
            }
            await repositorio.delete({ id_pueblic });
            res.status(204).json({ message: 'Publicacion borrada con exito' });
        } catch (error) {
            const message = error as string;
            next(Boom.badData(message));
        }
    }
}

