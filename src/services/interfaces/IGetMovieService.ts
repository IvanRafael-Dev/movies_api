import { Movie } from "../../domain/Movie"

export interface IGetMovieService {
  execute(id: string): Promise<Movie>
}