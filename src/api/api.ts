import 'dotenv/config';
import express from 'express'

const app = express();

app.use(express.json());

app.get('/movies', (req, res) => {
  return res.status(200).json({ message: 'Oi Braddock!!. Tá no Ar, jajá eu vou dar continuidade aqui kkk' });
})

app.post('/movies', (req, res) => {
  return res.status(201).json({ message: 'Movie created successfully!' });
});

export { app };