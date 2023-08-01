export default class ConflictError extends Error {
  public readonly statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 409;
  }
}