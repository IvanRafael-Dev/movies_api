import GetMoviesController from "../../controllers/GetMoviesController";
import GetVotesController from "../../controllers/GetVotesController";
import MySQLConnection from "../../database/connection";

const mysqlConnection = MySQLConnection.connect();
const getVotesController = new GetVotesController(mysqlConnection);

export { getVotesController };