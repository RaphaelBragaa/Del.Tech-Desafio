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
    const pool = await connectToDatabase();
    const result = await pool.query('SELECT * FROM Tarefa');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
  }
});

server.listen(4000,()=>{
    console.log("Server On !")
})
