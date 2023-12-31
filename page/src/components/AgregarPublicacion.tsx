import React from "react";
import { addPublic } from "../api/addPublic";
import { UseContexto } from "../Context";
import '../styles/agregar_public.scss';

export function AgregarPublicacion(){
    const [message, setEntrada] = React.useState('');
    const {token} = UseContexto();
    const subir = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addPublic({message}, token)
        .then(()=>{
            window.location.reload();
        })
        .catch(error=>{
            console.error(error);
        });

    }
    return(
        <form className="add_public" onSubmit={subir}>
            <textarea  id="public_entrada" value={message} onChange={e => setEntrada(e.target.value)} placeholder="Publicación nueva"></textarea>
            <button className="boton" type='submit'>Agregar</button>
        </form>
    );
}