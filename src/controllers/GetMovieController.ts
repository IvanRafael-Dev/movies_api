import { Request, Response, NextFunction } from "express";
import { IGetMovieService } from "../services/interfaces/IGetMovieService";

export default class GetMovieController {
  private readonly getMovieService: IGetMovieService

  constructor(getMovieService: IGetMovieService) {
    this.getMovieService = getMovieService;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const movie = await this.getMovieService.execute(req.params.id);
      return res.status(200).json(movie);      
    } catch (error) {
      next(error);
    }
  }
}