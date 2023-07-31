require('dotenv').config();
const express = require('express');

const app = express();

const API_PORT = process.env.API_PORT || 3000;

app.use(express.json());

app.get('/movies', (req, res) => {
  return res.status(200).json({ message: 'Oi Braddock!!. Tá no Ar, jajá eu vou dar continuidade aqui kkk' });
})

app.post('/movies', (req, res) => {
  return res.status(201).json({ message: 'Movie created successfully!' });
});

app.listen(API_PORT, console.log(`Server is running on port ${3000}`));