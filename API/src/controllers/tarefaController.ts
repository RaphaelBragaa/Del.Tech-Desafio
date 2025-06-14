import { Request, Response } from 'express';
import { listarTarefasRepositorie, criarTarefaRepositorie } from '../repositories/tarefaRepositorie';

export async function  listarTarefasController (req: Request, res: Response) {
  try {
    const tarefas = await listarTarefasRepositorie();
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

export async function criarTarefaController (req: Request, res: Response) {
  try {
    const novaTarefa = req.body;
    await criarTarefaRepositorie(novaTarefa);
    res.status(201).json({ message: 'Tarefa criada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};