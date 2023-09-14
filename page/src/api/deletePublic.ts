import { base } from "../utilities/apiBase";

export async function  deletePublic(id:string, token:string) {
    const solicitud = {
        method:'DELETE',
        headers:{
            token,
            entrada: 'entrada123',
            'Content-Type': 'application/json'
        }
    }
    console.log(id);
    const data = await fetch(`${base}/publicaciones/${id}`, solicitud);
    const error = await data.json();
    if(!data.ok){
        throw error;
    }
}