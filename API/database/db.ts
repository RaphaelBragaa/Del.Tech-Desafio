import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  }
};

console.log('Configuração do banco de dados:', config); 

export async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log('Conectado ao SQL Server!');
    return pool;
  } catch (err) {
    console.error('Erro ao conectar ao SQL Server:', err);
    throw err;
  }
}
