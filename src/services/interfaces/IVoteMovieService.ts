import { Movie } from "../../domain/Movie"

export interface IVoteMovieService {
  execute(movieId: number, votes: number): Promise<Movie>
}