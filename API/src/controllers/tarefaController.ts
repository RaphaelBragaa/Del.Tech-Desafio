import { Request, Response } from 'express';
import { 
  listarTarefasRepositorie, 
  criarTarefaRepositorie, 
  buscarTarefaRepositorie 
       } 
from '../repositories/tarefaRepositorie';

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

export async function buscarTarefaController (req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const tarefa = await buscarTarefaRepositorie(id);
    if (!tarefa) res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(tarefa);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
};