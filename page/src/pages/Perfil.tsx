import { useParams, Navigate } from 'react-router-dom';
import { rutas } from '../utilities/rutas';
import { UseContexto } from '../Context';
import React from 'react';
import { getOnePublic } from '../api/getPublics';
import { PublicUser } from '../components/PublicUser';

export function Perfil() {
  const parametro = useParams();
  const { permiso } = UseContexto();
  const [userInfo, setUserInfo] = React.useState<{name:string, email:string}>({name:'', email:''});
  const [allPublics, setAllPublics] = React.useState<PublicSimple[]>([]);
  console.log(userInfo, allPublics);
  React.useEffect(() => {
    getOnePublic(parametro.id_user as string)
      .then(data => {
        const {name, email} = data;
        setUserInfo({name, email});
        setAllPublics(data.publicaciones);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [parametro.id_user]);

  if (permiso) {
    return (
      <>
        <div className="perfil">
          <span>{userInfo.name}</span>
        </div>
        <div className="publicaciones_personales">
          {allPublics.map(elemento=>{
            return(<PublicUser key={elemento.id_pueblic} {...elemento}/>);
          })}
        </div>
      </>
    )
  }
  return <Navigate to={rutas.login} />
}
