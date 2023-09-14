import '../styles/editar.scss';
import React from 'react'
import { UseContexto } from '../Context';
import { editPublic } from '../api/editPublic';

export function Editar() {
    const [message, setMessage] = React.useState('');
    const { setMostrarEditar, mEdit, messageId } = UseContexto();
    const {token} = UseContexto();

    React.useEffect(()=>{
        setMessage(mEdit);
    },[mEdit])
    
    const agregar = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const solicitud:EditPublic={
            id_pueblic:messageId,
            message
        }
        editPublic(solicitud, token)
        .then(()=>{
            window.location.reload();
        })
        .catch(err=>{
            console.error(err);
        });
        
    }

    return (
        <form className="menu_formulario" onSubmit={agregar}>
            <label htmlFor="edit_message">Editar</label>
            <textarea name="" id="edit_message" className='message_area'  value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <div className="area_botones">
                <button className='boton aceptar' type='submit'>Aceptar</button>
                <button className="boton cancelar" type='button' onClick={() => setMostrarEditar(false)} >Cancelar</button>
            </div>
        </form>
    )
}
