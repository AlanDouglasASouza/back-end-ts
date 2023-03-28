import { Request, Response } from "express";
import { UserValidate } from "../helpers/userValidates";
import { IResponseUser, IUser } from "../interfaces/iuser";
import User from "../models/user";
import UserRepository from "../repositories/userRepository";

export default class UserHandler {
    private repository: UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    public async create(req: Request, res: Response) {
        const { name, email, password }: IUser = req.body;
        const validate: UserValidate = new UserValidate(name, email, password);

        if (validate.fail)
            return res.status(400).json({ message: validate.message });

        const user: User = new User({ name, email, password });
        const createUser: IResponseUser<User[]> =
            await this.repository.createUser(user);

        if (createUser.status !== 201) {
            return res
                .status(createUser.status)
                .json({ errors: createUser.errors });
        }

        const { id, email: userEmail, name: userName }: User = user;

        res.cookie("user-id", user.id, {
            maxAge: 900000,
            httpOnly: true,
        });

        res.status(200).json({ id, email: userEmail, name: userName });
    }

    public async get(req: Request, res: Response) {
        const users: IResponseUser<Array<User[]>> =
            await this.repository.getAllUsers();

        if (users.status !== 200)
            return res.status(users.status).json({ errors: users.errors });

        res.status(200).json(users.data);
    }
}
