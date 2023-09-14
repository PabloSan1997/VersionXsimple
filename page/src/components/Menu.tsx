import { UseContexto } from "../Context";
import { deletePublic } from "../api/deletePublic";



export function Menu({classe, id_pueblic, message}:Menu_Propiedades){
    const {setMessageId, setMostrarEditar, setMEdit, token} = UseContexto();
    const mostrar = () => {
        setMessageId(id_pueblic);
        setMostrarEditar(true);
        setMEdit(message);
    }
    const borrar = () =>{
        deletePublic(id_pueblic, token)
        .then(()=>{
            window.location.reload();
        })
        .catch(error=>{
            console.log(error);
        });
    }
    return(
       <div className={classe}>
        <span className="editar" onClick={mostrar}>Editar</span>
        <span className="borrar" onClick={borrar}>Borrar</span>
       </div>
    );
}