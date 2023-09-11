import React from 'react'
import {useParams} from 'react-router-dom';
import { UseContexto } from '../Context';
import {Navigate} from 'react-router-dom';
import { rutas } from '../utilities/rutas';

export function Message() {
    const parametros = useParams();
    const {permiso} = UseContexto();
  if(permiso){
    return (
      <div>Message {parametros.id_pueblic}</div>
    )
  }
  return <Navigate to={rutas.login}/>
}
