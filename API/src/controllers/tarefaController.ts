import { Request, Response } from 'express';
import listarTarefaRepositorie from '../repositories/tarefaRepositorie';

export const listarTarefasController = async (req: Request, res: Response) => {
  try {
    const tarefas = await listarTarefaRepositorie();
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};