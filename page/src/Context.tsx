import React from 'react';
import { loginUser } from './api/loginUser';


const Contexto = React.createContext({});

export function ProvedorContexto({children}:Children){
    const [permiso, setPermiso] = React.useState<boolean>(false);
    const [token, setToken] = React.useState<string>('');
    const [inicio, setInicio] = React.useState<UserReq>({email:'', password:''});
    const [actualizarInicio, setActualizarInicio] = React.useState(false);
    console.log(token);
    const iniciarSeccion = (entrada:UserReq):void => {
        setInicio(entrada);
        setActualizarInicio(!actualizarInicio);
    }

    React.useEffect(()=>{
        loginUser(inicio)
        .then(data=>{
            setPermiso(data.permiso);
            setToken(data.token);
        })
        .catch(error=>{
            const miError = error as ErrorBoom;
            if(miError.message && inicio.email && inicio.password){
                alert(miError.message);
            }
            console.error(miError);
        });
    },[actualizarInicio, inicio]);

    return(
        <Contexto.Provider value={{
            permiso,
            token,
            iniciarSeccion
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;