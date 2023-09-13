import '../styles/editar.scss';
import React from 'react'
import { UseContexto } from '../Context';

export function Editar() {
    const [message, setMessage] = React.useState('');
    const { setMostrarEditar, mEdit } = UseContexto();
    React.useEffect(()=>{
        setMessage(mEdit);
    },[mEdit])
    console.log(message);
    return (
        <form className="menu_formulario">
            <label htmlFor="edit_message">Editar</label>
            <textarea name="" id="edit_message" className='message_area'  value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <div className="area_botones">
                <button className='boton aceptar' type='submit'>Aceptar</button>
                <button className="boton cancelar" type='button' onClick={() => setMostrarEditar(false)} >Cancelar</button>
            </div>
        </form>
    )
}
