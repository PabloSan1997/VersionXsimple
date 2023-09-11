import { base } from "../utilities/apiBase";


export async function loginUser(user:UserReq):Promise<ResponseLogin>{
    const solicitud = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            entrada:'entrada123'
        },
        body:JSON.stringify(user)
    }
    const generar = await fetch(`${base}/users/login`, solicitud);
    const data = await generar.json();
    if(!generar.ok){
        const error = data as ErrorBoom;
        throw error;
    }
    return data;
}