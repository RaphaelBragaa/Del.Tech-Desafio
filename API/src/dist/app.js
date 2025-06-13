import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());
server.get('/', (req, res) => {
    res.send('API is running');
});
server.listen(4000, () => {
    console.log("Server On !");
});
