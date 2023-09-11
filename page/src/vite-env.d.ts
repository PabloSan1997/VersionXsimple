/// <reference types="vite/client" />


type Children = {
    children: JSX.Element | JSX.Element[]
}


type Contexto = {
    permiso: boolean,
    token:string,
    iniciarSeccion:(a:UserReq)=>void
}


//-----------------------API------------------

interface UserReq {
    email: string,
    password: string
}
interface ResponseLogin {
    token: string,
    permiso: boolean
}


type ErrorBoom = {
    statusCode: number,
    error: string,
    message: string
}