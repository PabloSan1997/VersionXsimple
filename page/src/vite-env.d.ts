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
    publicaciones:FullPublic[],
    userId:string,
    messageId:string, 
    setMessageId:(a:string)=>void,
    mostrarEditar:boolean, 
    setMostrarEditar:(a:boolean)=>void,
    setMEdit:(a:string)=>void,
    mEdit:string,
    loading:boolean, 
    setLoading:(a:boolean)=>void
}


//-----------------------API------------------

interface UserReq {
    email: string,
    password: string
}
interface ResponseLogin {
    token: string,
    permiso: boolean,
    name:string,
    id_user:string
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
interface PublicUserCaja extends PublicSimple{
    id_users,
    name:string
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

interface Menu_Propiedades{
    classe:string,
    id_pueblic: string,
    message:string, 
}
interface EditPublic{
    id_pueblic: string,
    message: string
}
