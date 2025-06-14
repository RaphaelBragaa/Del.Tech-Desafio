import { ObjectId } from 'mongodb';
import {connectToDatabase} from '../database/db';
import { Tarefa, TarefaCreate } from '../models/tarefaModel';

const db = await connectToDatabase();

export function listarTarefasRepositorie () {
      const tarefas = db.collection('tarefas').find().toArray();
      return tarefas;
  }

export  function criarTarefaRepositorie(tarefa: TarefaCreate) {
  const tarefaComData = {
    ...tarefa,
    dataCriacao: new Date()
  };
  const result = db.collection('tarefas').insertOne(tarefaComData);
  return result;
}

  export function buscarTarefaRepositorie (id: string) {
    const tarefa = db.collection('tarefas').findOne({ _id: new ObjectId(id) });
    return tarefa;
  }

  export function deletarTarefaRepositorie (id: string) {
    const result = db.collection('tarefas').deleteOne({ _id: new ObjectId(id) });
    return result;
  }
