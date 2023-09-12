import { UseContexto } from "../Context";
import { cambiarFecha } from "../utilities/cambiarFecha";
import {Bars2Icon} from '@heroicons/react/24/solid';

export function PublicUser(props: PublicUserCaja) {
    const {message, fecha_actual, id_users} = props;
    const mostra = cambiarFecha(fecha_actual);
    const {userId} = UseContexto();
    return (
        <div className="public">
            {userId===id_users?<Bars2Icon/>:null}
            <p className="texto">{message}</p>
            <span className="fecha">{mostra.fecha}</span>
            <span className="hora">{mostra.hora}</span>
        </div>
    );
}