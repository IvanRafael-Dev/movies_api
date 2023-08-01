import GetMovieController from "../../controllers/GetMovieController";
import MySQLConnection from "../../database/connection";
import GetMovieService from "../../services/GetMovieService";

const mysqlConnection = MySQLConnection.connect();
const getMovieService = new GetMovieService(mysqlConnection);
const getMovieController = new GetMovieController(getMovieService);

export { getMovieController };