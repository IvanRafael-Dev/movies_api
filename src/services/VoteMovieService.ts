import { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { IVoteMovieService } from "./interfaces/IVoteMovieService";
import NotFoundError from "../errors/not-found-error";
import { Movie } from "../domain/Movie";

export default class VoteMovieService implements IVoteMovieService {
  private readonly dbConnection: Pool
  constructor(dbConnection: Pool) {
    this.dbConnection = dbConnection;
  }
  async execute(movieId: number, votes: number): Promise<Movie> {
    // if (isNaN(movieId) || isNaN(votes)) {

    // }
    const [row] = await this.dbConnection.query<ResultSetHeader>('UPDATE votes SET voteCount = ? WHERE movieId = ?', [votes, movieId]);
    if (row.affectedRows === 0) {
      throw new NotFoundError(`Movie with id '${movieId}' not found`);
    }
    const [[movie]] = await this.dbConnection.query<RowDataPacket[]>('SELECT * FROM movies WHERE id = ?', [movieId]);
    return movie as unknown as Movie;
  }
}