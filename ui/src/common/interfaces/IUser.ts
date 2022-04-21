export interface IAuth {
    username: string;
    password: string;
}

export interface IUser {
    username: string;
    email: string;
    phone?: string;
    _id: string;
}

export type IToken = String