import { Request, Response } from 'express';
import { 
  listarTarefasRepositorie, 
  criarTarefaRepositorie, 
  buscarTarefaRepositorie, 
  deletarTarefaRepositorie
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

export async function deletarTarefaController (req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const resultado = await deletarTarefaRepositorie(id);
    if (resultado.deletedCount === 0) {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    } else {
      res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};