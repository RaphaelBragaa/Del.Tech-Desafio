import express from 'express';
import {
  listarTarefasController,
  criarTarefaController,
  buscarTarefaController,
  deletarTarefaController
} from '../controllers/tarefaController';

const tarefaRouter = express.Router();

tarefaRouter
  .get('/', listarTarefasController)
  .post('/', criarTarefaController)
  .get('/:id', buscarTarefaController)
  .delete('/:id', deletarTarefaController);


export default tarefaRouter;