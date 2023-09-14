import { useParams, Navigate } from 'react-router-dom';
import { rutas } from '../utilities/rutas';
import { UseContexto } from '../Context';
import React from 'react';
import { getOnePublic } from '../api/getPublics';
import { PublicUser } from '../components/PublicUser';
import '../styles/publicaciones.scss';
import '../styles/perfil.scss';

export function Perfil() {
  const parametro = useParams();
  const { permiso} = UseContexto();
  const [userInfo, setUserInfo] = React.useState<{name:string, email:string}>({name:'', email:''});
  const [allPublics, setAllPublics] = React.useState<PublicSimple[]>([]);
  const [usuarioId, setUsuarioId] = React.useState('');
  React.useEffect(() => {
    getOnePublic(parametro.id_user as string)
      .then(data => {
        const {name, email, id_user} = data;
        setUserInfo({name, email});
        setAllPublics(data.publicaciones);
        setUsuarioId(id_user);
      })
      .catch(error => {
        console.error(error);
      });
  }, [parametro.id_user]);

  if (permiso) {
    return (
      <>
        <div className="perfil">
          <span className='nombre_usuario'>{userInfo.name}</span>
          <span className='email_usuario'>{userInfo.email}</span>
        </div>
        <div className="contenedor_full">
          {allPublics.map(elemento=>{
            return(<PublicUser key={elemento.id_pueblic} {...elemento} id_users={usuarioId} name={userInfo.name}/>);
          })}
        </div>
      </>
    )
  }
  return <Navigate to={rutas.login} />
}
