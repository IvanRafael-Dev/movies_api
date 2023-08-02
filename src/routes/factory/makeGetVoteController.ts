import GetVoteController from "../../controllers/GetVoteController";
import MySQLConnection from "../../database/connection";
import GetVoteService from "../../services/GetVoteService";

const mysqlConnection = MySQLConnection.connect();
const getVoteService = new GetVoteService(mysqlConnection);
const getVoteController = new GetVoteController(getVoteService);

export { getVoteController };