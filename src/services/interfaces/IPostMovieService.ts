import { Movie } from "../../domain/Movie";

export interface IPostMovieService {
  execute(movie: Omit<Movie, 'id'>): Promise<Movie | void>
}