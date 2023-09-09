import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
import { UserAdd, LoginUser } from '../main';
import { hash, compare } from 'bcrypt';
import { AppDataSource } from '../database/config';
import { Users } from '../database/models/users';
import { tokenJwt } from '../utilities/tokens';



export class UserController {
    async addUser(req: Request, res: Response, next: NextFunction) {
        try {
            let newUser = req.body as UserAdd;
            const password = await hash(newUser.password, 8);
            const repositorio = AppDataSource.getRepository(Users);
            const usuario = new Users();
            usuario.email = newUser.email;
            usuario.name = newUser.name;
            usuario.password = password;
            await repositorio.manager.save(usuario);
            res.status(201).json({ message: 'Se agrego usuario nuevo' });
        } catch (error) {
            const message = error as string|Error|undefined;
            next(Boom.badRequest(message));
        }
    }
    async loginUser(req: Request, res: Response, next: NextFunction){
        try {
            let newUser = req.body as LoginUser;
            const repositorio = AppDataSource.getRepository(Users);
            const user = await repositorio.findOne({where:{email:newUser.email}});
            if(!user){
                throw 'Error con el usuario o contraseña';
            }
            const comparar = await compare(newUser.password, user.password);
            if(!comparar){
                throw 'Error con el usuario o contraseña';
            }
            user.password = await hash(newUser.password, 7);
            const clonar = {
                ...user
            }
            const token = await tokenJwt.generar(clonar);
            await repositorio.update({id_user:user.id_user}, user);
            res.json({...token, permiso:true});
        } catch (error) {
            const message = error as string|Error|undefined;
            next(Boom.badRequest(message));
        }        
    }
    async loginToken(req: Request, res: Response, next: NextFunction){
        try {
           let {token} = req.body as {token:string};
           const repositorio = AppDataSource.getRepository(Users);
           const usuario = await tokenJwt.verificar(token);
           console.log(usuario);
           const {id_user, name, password, email} = usuario;
           const data = await repositorio.findOne({
            where:{
                id_user,
                email,
                name,
                password
            }
           });
           if(!data){
            throw 'No se puede iniciar seccion'
           }
           res.json({token, permisio:true});
        } catch (error) {
            const message = error as string|Error|undefined;
            next(Boom.badRequest(message));
        }  
    }
}

