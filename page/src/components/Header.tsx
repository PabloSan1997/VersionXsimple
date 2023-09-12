import { UseContexto } from "../Context";
import { useNavigate } from 'react-router-dom';
import { rutas } from "../utilities/rutas";
import '../styles/header.scss';

export function Header() {
    const { cerrarSeccion, permiso, name, userId } = UseContexto();
    const navegar = useNavigate();
    return (
        <header>
            <h1 onClick={() => navegar(permiso ? rutas.home : rutas.login)}>PublicX</h1>
            {!permiso ? null :
                (
                    <div className="area_info">
                        {!userId?
                        <span className="name_user">{name}</span>:
                        <span className="name_user" onClick={()=>navegar(`${rutas.perfil}/${userId}`)}>{name}</span>
                    }
                        <span
                            className="log-user"
                            onClick={cerrarSeccion}
                        >Logout</span>
                    </div>
                )}
        </header>
    );
}