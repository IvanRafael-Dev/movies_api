import { Request, Response, NextFunction } from "express";
import { IGetVoteService } from "../services/interfaces/IGetVoteService";

export default class GetVoteController {
  private readonly getMovieService: IGetVoteService

  constructor(getMovieService: IGetVoteService) {
    this.getMovieService = getMovieService;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const movie = await this.getMovieService.execute(+req.params.movieId);
      return res.status(200).json(movie);      
    } catch (error) {
      next(error);
    }
  }
}