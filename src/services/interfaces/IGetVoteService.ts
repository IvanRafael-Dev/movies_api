import { Movie } from "../../domain/Movie"
import { Votes } from "../../domain/Votes"

export interface IGetVoteService {
  execute(id: number): Promise<Votes>
}