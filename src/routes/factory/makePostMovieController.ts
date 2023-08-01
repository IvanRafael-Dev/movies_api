import PostMovieController from "../../controllers/PostMovieController";
import MySQLConnection from "../../database/connection";
import PostMovieService from "../../services/PostMovieService";

const mysqlConnection = MySQLConnection.connect();
const postMovieService = new PostMovieService(mysqlConnection);
const postMovieController = new PostMovieController(postMovieService);

export { postMovieController };