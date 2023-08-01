import 'dotenv/config'
import { createPool, Pool } from "mysql2";

export default class MySQLConnection {
  static connect () {
    const poll = createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '123456',
      database: process.env.DB_NAME || 'movies',
      port: Number(process.env.DB_PORT) || 3306,
    }).promise();

    return poll;
  }
}