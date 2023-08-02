import { Router } from "express";
import { getVotesController } from "./factory/makeGetVotesController";
import { getVoteController } from "./factory/makeGetVoteController";

const router = Router();

router
  .get('/votes', getVotesController.execute.bind(getVotesController))
  .get('/votes/:movieId', getVoteController.execute.bind(getVoteController));

export { router as votesRouter }