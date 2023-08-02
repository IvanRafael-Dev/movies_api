import { Pool, RowDataPacket } from "mysql2/promise";
import { Movie } from "../domain/Movie";
import MissingParamError from "../errors/missing-param-error";
import { IGetMovieService } from "./interfaces/IGetMovieService";
import NotFoundError from "../errors/not-found-error";

export default class GetMovieService implements IGetMovieService {
  private readonly dbConnection: Pool

  constructor(dbConnection: Pool) {
    this.dbConnection = dbConnection;
  }
  
  async execute(id: number): Promise<Movie> {
    const [[row]] = await this.dbConnection
      .query<RowDataPacket[]>(
        'SELECT * FROM movies where id = ?', [id]
      );

    if (!row) {
      throw new NotFoundError('Movie not found');
    }
    
    return row as unknown as Movie;
  }
}