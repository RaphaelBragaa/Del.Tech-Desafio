import express from 'express';
import {
  listarTarefasController,
  criarTarefaController
} from '../controllers/tarefaController';

const tarefaRouter = express.Router();

tarefaRouter
  .get('/', listarTarefasController)
  .post('/', criarTarefaController);

export default tarefaRouter;