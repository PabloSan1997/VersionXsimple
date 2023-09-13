import { LogginFormulario } from '../components/LoginFormulario'
import { UseContexto } from '../Context'
import { Navigate } from 'react-router-dom';
import { rutas } from '../utilities/rutas';
import '../styles/formularioLogin.scss';

export function Login() {
  const { permiso } = UseContexto();
  if (!permiso) {
    return (
      <>
        <h2 className='login_titulo'>Inicie seccion</h2>
        <LogginFormulario />
      </>
    )
  }
  return <Navigate to={rutas.home} />
}
