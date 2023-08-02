import { Router } from "express";
import { getVotesController } from "./factory/makeGetVotesController";
import { getVoteController } from "./factory/makeGetVoteController";
import { voteMovieController } from "./factory/makeVoteMovieController";

const router = Router();

router
  .get('/votes', getVotesController.execute.bind(getVotesController))
  .get('/votes/:movieId', getVoteController.execute.bind(getVoteController))
  .patch('/votes/:id', voteMovieController.execute.bind(voteMovieController));

export { router as votesRouter }