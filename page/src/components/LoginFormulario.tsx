import React from 'react';
import { UseContexto } from '../Context';

export function LogginFormulario(): JSX.Element {

    const {iniciarSeccion} = UseContexto();

    const [entradas, setEntradas] = React.useState<UserReq>({
        email: '',
        password: ''
    });

    const setEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEntradas({...entradas, email:e.target.value});
    };
    const setPassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEntradas({...entradas, password:e.target.value});
    }
    const evento = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!entradas.email){
            alert('Introdusca un email');
        }else if(!entradas.password){
            alert('Introdusca su contraseña');
        }else{
            iniciarSeccion(entradas);
        }
    }

    return (
        <form className="formulario_login" onSubmit={evento}>
            <div className="area_entrada">
                <label htmlFor="entrada1">Email</label>
                <input
                    type="text"
                    className='entradaLogin'
                    id='entrada1' 
                    value={entradas.email}
                    onChange={setEmail}
                    placeholder='Escribir...'
                    />
            </div>
            <div className="area_entrada">
                <label htmlFor="entrada2">Contraseña</label>
                <input
                    type="password"
                    className='entradaLogin'
                    id='entrada2' 
                    value={entradas.password}
                    onChange={setPassword}
                    placeholder='Escribir...'
                    />
            </div>
            <button type="submit" className="boton">Iniciar</button>
        </form>
    );
}