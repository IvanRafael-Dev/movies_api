import VoteMovieController from "../../controllers/VoteMovieController";
import MySQLConnection from "../../database/connection";
import VoteMovieService from "../../services/VoteMovieService";

const dbConnection = MySQLConnection.connect();
const voteMovieService = new VoteMovieService(dbConnection);
const voteMovieController = new VoteMovieController(voteMovieService);

export { voteMovieController };