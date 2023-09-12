
import { UseContexto } from '../Context';
import { cambiarFecha } from '../utilities/cambiarFecha';
import {useNavigate} from 'react-router-dom';
import { rutas } from '../utilities/rutas';

export  function FullPublicaciones() {
    const {publicaciones} = UseContexto();
  return (
    <div className="contenedro_full">
        {publicaciones.map(elemento=>{
            return(
                <FullPublic key={elemento.id_pueblic} {...elemento}/>
            );
        })}
    </div>
  )
}


function FullPublic(props:FullPublic){
    const {users, message, fecha_actual} = props;
    const mostra = cambiarFecha(fecha_actual);
    const navegar = useNavigate();
    const ir =()=>{
        navegar(`${rutas.perfil}/${users.id_user}`);
    }
    return(
        <div className="public">
            <span className='main_name' onClick={ir}>{users.name}</span>
            <p className="texto">{message}</p>
            <span className="fecha">{mostra.fecha}</span>
            <span className="hora">{mostra.hora}</span>
        </div>
    );
}