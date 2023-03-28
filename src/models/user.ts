import { IUser } from "../interfaces/iuser";
import { v4 } from "uuid";

export default class User {
    #name;
    #email;
    #id;
    #password;

    constructor(data: IUser) {
        this.#name = data.name;
        this.#email = data.email;
        this.#password = data.password;
        this.#id = this.createId();
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get id() {
        return this.#id;
    }

    get password() {
        return this.#password;
    }

    private createId() {
        const id = v4();
        return id;
    }
}
