export interface IAuth {
    username: string;
    password: string;
}

export interface IUser extends IAuth {
    email: string;
    phone?: string;
}