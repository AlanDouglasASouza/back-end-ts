import { Pool } from "pg";

export default class connectDB {
    private _pool: Pool;
    constructor() {
        this._pool = new Pool({
            user: process.env.DBUSER,
            host: process.env.DBHOST,
            database: process.env.DBNAME,
            password: process.env.DBPASSWORD,
            port: Number(process.env.DBPORT),
            max: 20,
            idleTimeoutMillis: 100,
        });
    }

    get pool() {
        return this._pool;
    }
}
