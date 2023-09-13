import { UseContexto } from "../Context";




export function Menu({classe, id_pueblic, message}:Menu_Propiedades){
    const {setMessageId, setMostrarEditar, setMEdit} = UseContexto();
    const mostrar = () => {
        setMessageId(id_pueblic);
        setMostrarEditar(true);
        setMEdit(message);
    }

    return(
       <div className={classe}>
        <span className="editar" onClick={mostrar}>Editar</span>
        <span className="borrar">Borrar</span>
       </div>
    );
}