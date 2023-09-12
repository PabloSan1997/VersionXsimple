import { base } from "../utilities/apiBase";


export async function  addPublic(params:Message, token:string):Promise<void> {
    const sollicitud = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            entrada:'entrada123',
            token
        },
        body:JSON.stringify(params)
    }
    const mandar = await fetch(`${base}/publicaciones`, sollicitud);
    const data = await mandar.json();
    if(!mandar.ok){
        const error = data as Error;
        throw error;
    }
    
}