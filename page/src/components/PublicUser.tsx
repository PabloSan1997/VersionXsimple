import { cambiarFecha } from "../utilities/cambiarFecha";


export function PublicUser(props: PublicSimple) {
    const {message, fecha_actual} = props;
    const mostra = cambiarFecha(fecha_actual);
    return (
        <div className="public">
            <p className="texto">{message}</p>
            <span className="fecha">{mostra.fecha}</span>
            <span className="hora">{mostra.hora}</span>
        </div>
    );
}