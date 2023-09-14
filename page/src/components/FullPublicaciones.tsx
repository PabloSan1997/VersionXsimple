import { Bars3Icon } from '@heroicons/react/24/solid';
import { UseContexto } from '../Context';
import { cambiarFecha } from '../utilities/cambiarFecha';
import { useNavigate } from 'react-router-dom';
import { rutas } from '../utilities/rutas';
import { Menu } from './Menu';
import React from 'react';

export function FullPublicaciones() {
    const { publicaciones } = UseContexto();
    return (
        <div className="contenedor_full">
            {publicaciones.map(elemento => {
                return (
                    <FullPublic key={elemento.id_pueblic} {...elemento} />
                );
            })}
        </div>
    )
}


function FullPublic(props: FullPublic) {
    const { users, message, fecha_actual, id_pueblic } = props;
    const mostra = cambiarFecha(fecha_actual);
    const navegar = useNavigate();
    const { userId } = UseContexto();
    const ir = () => {
        navegar(`${rutas.perfil}/${users.id_user}`);
    }
    const [mostrarMenu, setMostrarMenu] = React.useState(false);
    const cambiar = () => {
        setMostrarMenu(!mostrarMenu);
    }



    return (
        <div className="public">
            <div className="area_cabeza">
                <span className='main_name' onClick={ir}>{users.name}</span>
                {userId === users.id_user ?
                    <Bars3Icon className='cerrar' onClick={cambiar}/> :
                    null}
            </div>
            <p className="texto">{message}</p>
            <div className="area_fecha">
                <span className="fecha">{mostra.fecha}</span>
                <span className="hora">{mostra.hora}</span>
            </div>
           {mostrarMenu? <Menu classe='menu' id_pueblic={id_pueblic} message={message}/>:null}
        </div>
    );
}