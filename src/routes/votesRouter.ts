import { Router } from "express";
import { getVotesController } from "./factory/makeGetVotesController";

const router = Router();

router
  .get('/votes', getVotesController.execute.bind(getVotesController));

export { router as votesRouter }