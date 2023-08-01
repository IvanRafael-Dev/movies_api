import { Router } from "express";
import GetMoviesController from "../controllers/GetMoviesController";
import MySQLConnection from "../database/connection";

const router = Router();

const mysqlConnection = MySQLConnection.connect();
const getMoviesController = new GetMoviesController(mysqlConnection);

router
  .get('/movies', getMoviesController.execute.bind(getMoviesController))

export { router as movieRouter }