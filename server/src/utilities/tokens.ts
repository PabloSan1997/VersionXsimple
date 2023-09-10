import jwt from 'jsonwebtoken';
import { variables } from '../config/variables';
import {UserId} from '../main';
import { Users } from '../database/models/users';
import { AppDataSource } from '../database/config';

type JSONTOKEN = {
    generar:(usuario:UserId)=>Promise<{token:string}>
    verificar:(token:string)=>Promise<Users>;
}

export const tokenJwt:JSONTOKEN = {
	generar:async (usuario:UserId)=>{
		if(!variables.KEY_JWT){
			throw 'Problemas al iniciar secion';
		}
		const token = jwt.sign(usuario, variables.KEY_JWT);
		return {token};
	},
	verificar:async (token:string)=>{
		if(!variables.KEY_JWT){
			throw 'Problemas al iniciar secion';
		}
		const user = jwt.verify(token, variables.KEY_JWT) as UserId;
		const repositorio = AppDataSource.getRepository(Users);
		const usuario = await repositorio.findOne({
			where:{
				id_user:user.id_user,
				name:user.name,
				email:user.email,
				password:user.password
			}
		});
		if(!usuario){
			throw 'Error';
		}
		return usuario;
	}
};