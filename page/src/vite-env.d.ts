/// <reference types="vite/client" />


type Children = {
    children: JSX.Element | JSX.Element[]
}


type Contexto = {
    permiso: boolean,
    token:string,
    iniciarSeccion:(a:UserReq)=>void,
    cerrarSeccion:()=>void,
    name:string,
    publicaciones:FullPublic[]
}


//-----------------------API------------------

interface UserReq {
    email: string,
    password: string
}
interface ResponseLogin {
    token: string,
    permiso: boolean,
    name:string
}


type ErrorBoom = {
    statusCode: number,
    error: string,
    message: string
}

interface FullPublic extends PublicSimple {
    users: {
      id_user: string,
      name: string
    }
}

interface PublicSimple {
    id_pueblic: string,
    message: string,
    fecha: string,
    fecha_actual: string,
}

interface OneUser{
    id_user: string,
  email: string,
  name: string,
  publicaciones:PublicSimple[]
}

interface Message {
    message:string
}