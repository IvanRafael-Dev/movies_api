import { Request, Response, NextFunction } from "express";
import { IVoteMovieService } from "../services/interfaces/IVoteMovieService";

export default class VoteMovieController {
  private readonly voteMovieService: IVoteMovieService;
  constructor(voteMovieService: IVoteMovieService) {
    this.voteMovieService = voteMovieService;
  }
  
  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const movie = await this.voteMovieService.execute(+req.params.id, +req.body.voteCount);      
      return res.status(200).json(
        { 
          message: `Vote successfully registered`,
          movie: movie.title
        }
      );      
    } catch (error) {
      next(error);
    }
  }
}