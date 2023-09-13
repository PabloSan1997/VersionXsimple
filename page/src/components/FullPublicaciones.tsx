import { Bars3Icon } from '@heroicons/react/24/solid';
import { UseContexto } from '../Context';
import { cambiarFecha } from '../utilities/cambiarFecha';
import { useNavigate } from 'react-router-dom';
import { rutas } from '../utilities/rutas';

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
    const { users, message, fecha_actual } = props;
    const mostra = cambiarFecha(fecha_actual);
    const navegar = useNavigate();
    const { userId } = UseContexto();

    const ir = () => {
        navegar(`${rutas.perfil}/${users.id_user}`);
    }
    return (
        <div className="public">
            <div className="area_cabeza">
            <span className='main_name' onClick={ir}>{users.name}</span>
            {userId === users.id_user ? <Bars3Icon className='cerrar' /> : null}
            </div>
            <p className="texto">{message}</p>
            <div className="area_fecha">
                <span className="fecha">{mostra.fecha}</span>
                <span className="hora">{mostra.hora}</span>
            </div>
        </div>
    );
}