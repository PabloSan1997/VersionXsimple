import jwt from 'jsonwebtoken';
import { variables } from '../config/variables';
import {UserId} from '../main';

type JSONTOKEN = {
    generar:(usuario:UserId)=>Promise<{token:string}>
    verificar:(token:string)=>Promise<UserId>;
}

export const tokenJwt:JSONTOKEN = {
    generar:async (usuario:UserId)=>{
        if(!variables.KEY_JWT){
            throw 'Problemas al iniciar secion'
        }
        const token = jwt.sign(usuario, variables.KEY_JWT);
        return {token}
    },
    verificar:async (token:string)=>{
        if(!variables.KEY_JWT){
            throw 'Problemas al iniciar secion'
        }
        const user = jwt.verify(token, variables.KEY_JWT) as UserId;
        return user;
    }
}