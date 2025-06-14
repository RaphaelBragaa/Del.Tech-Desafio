export interface Tarefa {
  _id?: string;
  titulo: string;
  descricao?: string;
  concluido?: boolean;
  dataCriacao?: Date;
}
export interface TarefaCreate {
  titulo: string;
  descricao?: string;
  concluido?: boolean;
  dataCriacao?: Date;
}