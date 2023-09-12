import { UseContexto } from "../Context";

export function Header() {
    const { cerrarSeccion, permiso, name } = UseContexto();

    return (
        <header>
            <h1>PublicX</h1>
            {!permiso ? null :
                (
                    <>  <span className="name_user">{name}</span>
                        <span
                            className="log-user"
                            onClick={cerrarSeccion}
                        >Logout</span>
                    </>
                )}
        </header>
    );
}