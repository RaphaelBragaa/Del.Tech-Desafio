import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import { setupSwagger } from '../config/swagger';
import { connectToDatabase } from '../database/db';

dotenv.config();

const server = express()
server.use(cors());
server.use(express.json());

setupSwagger(server);

server.get('/tarefas', async (req, res) => {
  try {
     const db = await connectToDatabase();
    const tarefas = await db.collection('tarefas').find().toArray();
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
  }
});

connectToDatabase()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server On! Porta: ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Falha na inicialização:', err);
    process.exit(1);
  });
