import React from 'react';
import { loginToken, loginUser } from './api/loginUser';
import { useCookies } from 'react-cookie';
import { getPublics } from './api/getPublics';

const Contexto = React.createContext({});

export function ProvedorContexto({ children }: Children) {
    const [permiso, setPermiso] = React.useState<boolean>(false);
    const [token, setToken] = React.useState<string>('');
    const [inicio, setInicio] = React.useState<UserReq>({ email: '', password: '' });
    const [actualizarInicio, setActualizarInicio] = React.useState(false);
    const [tokenCookie, setTokenCookie, removeTokenCookie] = useCookies(['tokenCookie']);
    const [name, setName] = React.useState('');
    const [publicaciones, setPublicaciones] = React.useState<FullPublic[]>([]);

    const iniciarSeccion = (entrada: UserReq): void => {
        setInicio(entrada);
        setActualizarInicio(!actualizarInicio);
    }

    const cerrarSeccion = () => {
        removeTokenCookie('tokenCookie');
        setToken('');
        setPermiso(false);
    }

    React.useEffect(() => {
        loginUser(inicio)
            .then(data => {
                setPermiso(data.permiso);
                setToken(data.token);
                setTokenCookie('tokenCookie', data.token, { maxAge: 20000 });
                setName(data.name);
            })
            .catch(error => {
                const miError = error as ErrorBoom;
                if (miError.message && inicio.email && inicio.password) {
                    alert(miError.message);
                }
                console.error(miError);
            });
    }, [actualizarInicio, inicio]);

    React.useEffect(() => {
        loginToken(tokenCookie.tokenCookie ? tokenCookie.tokenCookie : '')
            .then(data => {
                setPermiso(data.permiso);
                setToken(data.token);
                setName(data.name);
            })
            .catch(error => {
                console.error(error);
            });
    }, [token]);

    React.useEffect(() => {
        if (permiso) {
            getPublics()
                .then(data => {
                    setPublicaciones(data);
                })
                .catch(error => {
                    setPublicaciones([]);
                    console.error(error);
                });
        }
    }, [permiso]);

    return (
        <Contexto.Provider value={{
            permiso,
            token,
            iniciarSeccion,
            cerrarSeccion,
            name,
            publicaciones
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;