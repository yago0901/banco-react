export interface IHistory {
  id: number; 
  clientID: number;
  tipo: 'pix' | 'ted';
  chave: string;
  action: 'add' | 'remove',
  doc: number;
  favorecido: string;
  agencia: number;
  conta: number;
  banco: string;
  valor: number; 
  data: string; 
  description: string; 
}

export interface IUser {
  id: number; 
  name: string; 
  currentBalance: number;
  transitions: IHistory[];
}
