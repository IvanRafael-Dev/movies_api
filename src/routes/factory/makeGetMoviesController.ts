import GetMoviesController from "../../controllers/GetMoviesController";
import MySQLConnection from "../../database/connection";

const mysqlConnection = MySQLConnection.connect();
const getMoviesController = new GetMoviesController(mysqlConnection);

export { getMoviesController };