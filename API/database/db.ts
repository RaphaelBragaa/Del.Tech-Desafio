import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const config = new MongoClient(process.env.MONGO_URI);

console.log('Configuração do banco de dados:', config); 

export async function connectToDatabase() {
  try {
    await config.connect();
    const db = config.db();
    console.log('Conectado ao MongoDB!');
    return db;
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    throw err;
  }
}
