import 'dotenv/config';
import express from 'express'
import { movieRouter } from '../routes/movieRouter';
import { errorHandler } from '../middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use(movieRouter);

app.use(errorHandler)

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Oi Braddock!!. Tá no Ar, jajá eu vou dar continuidade aqui kkk' });
})

export { app };