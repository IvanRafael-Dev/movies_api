import { Request, Response } from "express";
import { Pool } from "mysql2/promise";

export default class GetMoviesController {
  private readonly dbConnection: Pool
  constructor(dbConnection: Pool) {
    this.dbConnection = dbConnection;
  }

  async execute(req: Request, res: Response) {
    const [rows] = await this.dbConnection.query('SELECT * FROM movies');
    return res.status(200).json(rows);
  }
}