import { QueryResult } from "pg";
import connectDB from "../database/postgres";
import { IResponseUser, IUser } from "../interfaces/iuser";
import User from "../models/user";

export default class UserRepository {
    private db: connectDB;
    constructor() {
        this.db = new connectDB();
    }

    public async getAllUsers() {
        try {
            const queryText: string = `SELECT * FROM users;`;
            const getUsers: QueryResult<Array<IUser>> =
                await this.db.pool.query(queryText);

            const res: IResponseUser<Array<IUser[]>> = {
                status: 200,
                data: getUsers.rows,
            };

            return res;
        } catch (err) {
            const res: IResponseUser<any> = {
                status: 500,
                errors: err,
            };
            return res;
        }
    }

    public async createUser(user: User) {
        try {
            const query: string = `INSERT INTO "users" (id, name, email, password) 
            VALUES ($1, $2, $3, $4) RETURNING *`;

            const values: Array<string> = [
                user.id,
                user.name,
                user.email,
                user.password,
            ];
            const userData: QueryResult<Array<IUser>> =
                await this.db.pool.query(query, values);
            const res: IResponseUser<Array<IUser[]>> = {
                status: 201,
                data: userData.rows,
            };

            return res;
        } catch (err) {
            {
                const res: IResponseUser<any> = {
                    status: 500,
                    errors: err,
                };
                return res;
            }
        }
    }
}
