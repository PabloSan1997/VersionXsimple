import { base } from "../utilities/apiBase";

export async function editPublic(data: EditPublic, token:string): Promise<void> {
    const solicitud = {
        method: 'PATCH',
        headers: {
            entrada: 'entrada123',
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify(data)
    }
    const fe = await fetch(`${base}/publicaciones`, solicitud);
    const mira = await fe.json();
    if(!fe.ok){
        throw mira;
    }
}