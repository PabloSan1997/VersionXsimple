
import { UseContexto } from '../Context'
import {Navigate} from 'react-router-dom';
import { rutas } from '../utilities/rutas';

export function Home() {
  const {permiso} = UseContexto();
  if(permiso){
    return (
      <div>Home</div>
    )
  }
  return <Navigate to={rutas.login}/>
}
