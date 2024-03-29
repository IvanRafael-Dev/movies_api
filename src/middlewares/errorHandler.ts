import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = 
  (err, req, res, next) => {
    return res.status(err.statusCode || 500).json({ error: err.message });
  }


export { errorHandler };