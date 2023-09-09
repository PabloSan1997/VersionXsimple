

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