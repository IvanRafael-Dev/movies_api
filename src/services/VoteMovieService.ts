import { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { IVoteMovieService } from "./interfaces/IVoteMovieService";
import NotFoundError from "../errors/not-found-error";
import { Movie } from "../domain/Movie";

export default class VoteMovieService implements IVoteMovieService {
  private readonly dbConnection: Pool
  constructor(dbConnection: Pool) {
    this.dbConnection = dbConnection;
  }
  async execute(movieId: number): Promise<Movie> {
    const [row] = await this.dbConnection.query<ResultSetHeader>('UPDATE movies SET votes = votes + ? WHERE id = ?', [1, movieId]);
    console.log(row);
    const [[movie]] = await this.dbConnection.query<RowDataPacket[]>('SELECT * FROM movies WHERE id = ?', [movieId]);
    if (row.affectedRows === 0) {
      throw new NotFoundError(`Movie with id '${movieId}' not found`);
    }
    return movie as unknown as Movie;
  }
}