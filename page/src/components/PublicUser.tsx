import { UseContexto } from "../Context";
import { cambiarFecha } from "../utilities/cambiarFecha";
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Menu } from "./Menu";
import React from "react";

export function PublicUser(props: PublicUserCaja) {
    const { message, fecha_actual, id_users , id_pueblic} = props;
    const mostra = cambiarFecha(fecha_actual);
    const { userId } = UseContexto();
    const [mostrarMenu, setMostrarMenu] = React.useState(false);
    const cambiar =() =>{
        setMostrarMenu(!mostrarMenu);
    }
    return (
        <div className="public">
            <div className="area_cabeza">
            {userId === id_users ? 
            <Bars3Icon className="cerrar" onClick={cambiar}/> :
             null}
            </div>
            <p className="texto">{message}</p>
            <div className="area_fecha">
                <span className="fecha">{mostra.fecha}</span>
                <span className="hora">{mostra.hora}</span>
            </div>
            {mostrarMenu?<Menu classe="menu" id_pueblic={id_pueblic} message={message}/>:null}
        </div>
    );
}