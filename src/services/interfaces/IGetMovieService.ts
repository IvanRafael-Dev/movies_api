import { Movie } from "../../domain/Movie"

export interface IGetMovieService {
  execute(id: number): Promise<Movie>
}