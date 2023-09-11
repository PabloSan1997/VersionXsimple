import React from 'react'
import {useParams, Navigate} from 'react-router-dom';
import { rutas } from '../utilities/rutas';
import { UseContexto } from '../Context';

export function Perfil() {
    const parametro = useParams();
    const {permiso} = UseContexto();
  if(permiso){
    return (
      <div>Perfil {parametro.id_user}</div>
    )
  }
  return <Navigate to={rutas.login}/>
}
