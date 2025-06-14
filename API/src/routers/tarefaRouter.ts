import express from 'express';
import {
  listarTarefasController,
  criarTarefaController,
  buscarTarefaController
} from '../controllers/tarefaController';

const tarefaRouter = express.Router();

tarefaRouter
  .get('/', listarTarefasController)
  .post('/', criarTarefaController)
  .get('/:id', buscarTarefaController);

export default tarefaRouter;