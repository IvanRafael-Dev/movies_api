import { Request, Response, NextFunction } from "express";
import { IPostMovieService } from "../services/interfaces/IPostMovieService";

export default class PostMovieController {
  private readonly postMovieService: IPostMovieService
  constructor(postMovieService: IPostMovieService) {
    this.postMovieService = postMovieService;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const movie = await this.postMovieService.execute(req.body);
      return res.status(201).json(movie);      
    } catch (error) {
      next(error);
    }
  }
}