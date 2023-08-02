import { Pool, RowDataPacket } from "mysql2/promise";
import NotFoundError from "../errors/not-found-error";
import { IGetVoteService } from "./interfaces/IGetVoteService";
import { Votes } from "../domain/Votes";

export default class GetVoteService implements IGetVoteService {
  private readonly dbConnection: Pool

  constructor(dbConnection: Pool) {
    this.dbConnection = dbConnection;
  }
  
  async execute(id: number): Promise<Votes> {
    const [[row]] = await this.dbConnection
      .query<RowDataPacket[]>(
        'SELECT * FROM votes where movieId = ?', [id]
      );

    if (!row) {
      throw new NotFoundError('Movie not found');
    }
    
    return row as unknown as Votes;
  }
}