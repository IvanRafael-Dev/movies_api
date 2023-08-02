import { Router } from "express";
import { getMoviesController } from "./factory/makeGetMoviesController";
import { getMovieController } from "./factory/makeGetMovieController";
import { postMovieController } from "./factory/makePostMovieController";
import { voteMovieController } from "./factory/makeVoteMovieController";

const router = Router();

router
  .get('/movies', getMoviesController.execute.bind(getMoviesController))
  .get('/movies/:id', getMovieController.execute.bind(getMovieController))
  .post('/movies', postMovieController.execute.bind(postMovieController))
  .patch('/movies/votes/:id', voteMovieController.execute.bind(voteMovieController));

export { router as movieRouter }