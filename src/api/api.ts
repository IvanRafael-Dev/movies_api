import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express'
import { movieRouter } from '../routes/movieRouter';
import { errorHandler } from '../middlewares/errorHandler';
import { votesRouter } from '../routes/votesRouter';

const app = express();

app.use((request: Request, response: Response, next: NextFunction): void => {
  response.set('access-control-allow-origin', '*')
  response.set('access-control-allow-methods', '*')
  response.set('access-control-allow-headers', '*')
  next()
})

app.use(express.json());

app.use(movieRouter);
app.use(votesRouter);

app.use(errorHandler)

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Oi Braddock!!. Tá no Ar, jajá eu vou dar continuidade aqui kkk' });
})

export { app };