import { Router } from "express";
import GetMoviesController from "../controllers/GetMoviesController";
import MySQLConnection from "../database/connection";
import { getMoviesController } from "./factory/GetMoviesController";

const router = Router();

router
  .get('/movies', getMoviesController.execute.bind(getMoviesController))

export { router as movieRouter }