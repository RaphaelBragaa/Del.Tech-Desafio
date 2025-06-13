import express from 'express';
import {
  listarTarefasController,
} from '../controllers/tarefaController';

const tarefaRouter = express.Router();

tarefaRouter.get('/', listarTarefasController);

export default tarefaRouter;