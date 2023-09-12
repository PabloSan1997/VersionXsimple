
import { UseContexto } from '../Context'
import {Navigate} from 'react-router-dom';
import { rutas } from '../utilities/rutas';
import { FullPublicaciones } from '../components/FullPublicaciones';
import { AgregarPublicacion } from '../components/AgregarPublicacion';

export function Home() {
  const {permiso} = UseContexto();
  if(permiso){
    return (
      <>
        <AgregarPublicacion/>
        <FullPublicaciones/>
      </>
    )
  }
  return <Navigate to={rutas.login}/>
}
