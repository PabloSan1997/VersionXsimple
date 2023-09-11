import { LogginFormulario } from '../components/LoginFormulario'
import { UseContexto } from '../Context'
import {Navigate} from 'react-router-dom';
import { rutas } from '../utilities/rutas';

export  function Login() {
  const {permiso} = UseContexto();
  if(!permiso){
    return (
      <>
        <LogginFormulario/>
      </>
    )
  }
  return <Navigate to={rutas.home}/>
}
