export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IResponseUser<T> {
    status: number;
    data?: T;
    errors?: T;
}
