import { base } from "../utilities/apiBase";


export async function getPublics():Promise<FullPublic[]>{
    const solicitud = {
        method:'GET',
        headers:{
            entrada:'entrada123'
        }
    }
    const generar = await fetch(`${base}/publicaciones`, solicitud);
    const data = await generar.json();
    if(!generar.ok){
        const info = data as ErrorBoom;
        throw info;
    }
    return data;
}

export async function getOnePublic(id_user:string):Promise<OneUser> {
    const solicitud = {
        method:'GET',
        headers:{
            entrada:'entrada123'
        }
    }
    const generar = await fetch(`${base}/users/${id_user}`, solicitud);
    const data = await generar.json();
    if(!generar.ok){
        const info = data as ErrorBoom;
        throw info;
    }
    return data;
}