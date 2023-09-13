import { UseContexto } from "../Context";
import { cambiarFecha } from "../utilities/cambiarFecha";
import { Bars3Icon } from '@heroicons/react/24/solid';

export function PublicUser(props: PublicUserCaja) {
    const { message, fecha_actual, id_users } = props;
    const mostra = cambiarFecha(fecha_actual);
    const { userId } = UseContexto();
    return (
        <div className="public">
            <div className="area_cabeza">
            {userId === id_users ? <Bars3Icon className="cerrar" /> : null}
            </div>
            <p className="texto">{message}</p>
            <div className="area_fecha">
                <span className="fecha">{mostra.fecha}</span>
                <span className="hora">{mostra.hora}</span>
            </div>
        </div>
    );
}