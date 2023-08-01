import { Pool, ResultSetHeader } from "mysql2/promise";
import { IPostMovieService } from "./interfaces/IPostMovieService";
import { Movie } from "../domain/Movie";
import MissingParamError from "../errors/missing-param-error";

export default class PostMovieService implements IPostMovieService {
  private readonly dbConnection: Pool
  constructor(dbConnection: Pool) {
    this.dbConnection = dbConnection;
  }

  validate(movie: Omit<Movie, 'id'>): void {
    const requiredFields = ['title', 'director', 'votes', 'year'];
    for (const field of requiredFields) {
      if (!movie[field as keyof Omit<Movie, 'id'>]) {
        throw new MissingParamError(`Missing param: ${field}`);
      }
    }
  }
    
  async execute(movie: Omit<Movie, 'id'>): Promise<Movie> {
    this.validate(movie);
    const [row] = await this.dbConnection.query<ResultSetHeader>('INSERT INTO movies SET ?', [movie]);
    return { id: row.insertId, ...movie };
  }
}