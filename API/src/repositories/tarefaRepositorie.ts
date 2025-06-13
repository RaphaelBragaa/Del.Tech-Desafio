import {connectToDatabase} from '../database/db';


const db = await connectToDatabase();

export default function listaTarefasRepositorie () {
      const tarefas = db.collection('tarefas').find().toArray();
      return tarefas;
  }


