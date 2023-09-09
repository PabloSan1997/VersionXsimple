

export interface UserAdd {
    name: string;
    email: string;
    password: string;
}

export type LoginUser = {
    email: string;
    password: string;
}

export interface UserId extends UserAdd {
    id_user: string;
}


export interface PublicAdd {
    message:string;
}

export interface PublicFull extends PublicAdd{
    id_pueblic:string;
    fecha:Date;
    fecha_actual:Date;
}

export interface PublicUser extends PublicFull {
    users:UserId
}