//usuário para apresentar quando logado

interface Ihistory {
  id: number; 
  tipo: 'pix' | 'ted';
  chave: string;
  action: 'add' | 'remove',
  doc: number;
  fornecido: string;
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
  transitions: Ihistory[];
}

const fakeUser:IUser[] = [{
  id: 1, 
  name: "João Silva", 
  currentBalance: 1000.5, 
  transitions: [
    {
      id: 1, 
      tipo: "pix",
      chave: "teste@gmail.com",
      action: "add",
      doc:12345678910,
      fornecido: "Carlos Alberto de Nobrega",
      agencia: 2515,
      conta: 351754,
      banco: 'Magnus Bank',
      valor: 250.0, 
      data: "2024-12-01T12:00:00Z", 
      description: "Pagamento de fatura", 
    },
    {
      id: 2,
      tipo: "ted",
      chave: "11998877665",
      action: "add",
      doc:12345678911,
      fornecido: "Fernando Rochet de Almeida",
      agencia: 1015,
      conta: 354800,
      banco: 'NuBank',
      valor: 150.0,
      data: "2024-12-02T14:30:00Z",
      description: "Compra no mercado",
    },
    {
      id: 3,
      tipo: "pix",
      chave: "11987654321",
      action: "remove",
      doc:12345678912,
      fornecido: "Lais Vissogli Toledo",
      agencia: 1312,
      conta: 567891,
      banco: 'Bradesco',
      valor: 500.0,
      data: "2024-12-03T09:00:00Z",
      description: "Depósito bancário",
    },
  ],
},
{
  id: 2, 
  name: "admin", 
  currentBalance: 1000.5, 
  transitions: [
    {
      id: 1, 
      tipo: "pix",
      chave: "teste@gmail.com",
      action: "add",
      doc:12345678910,
      fornecido: "Alberto Carlos da Silva",
      agencia: 2515,
      conta: 351754,
      banco: 'Magnus Bank',
      valor: 220.0, 
      data: "2024-12-01T12:00:00Z", 
      description: "Pagamento de fatura", 
    },
    {
      id: 2,
      tipo: "ted",
      chave: "11998877665",
      action: "add",
      doc:12345678911,
      fornecido: "Fernanda Massov",
      agencia: 1015,
      conta: 354800,
      banco: 'NuBank',
      valor: 90.0,
      data: "2024-12-02T14:30:00Z",
      description: "Compra no mercado",
    },
    {
      id: 3,
      tipo: "pix",
      chave: "11987654321",
      action: "remove",
      doc:12345678912,
      fornecido: "Teles Toledo Tavares",
      agencia: 1312,
      conta: 567891,
      banco: 'Bradesco',
      valor: 355.0,
      data: "2024-12-03T09:00:00Z",
      description: "Depósito bancário",
    },
  ],
}];

export default fakeUser;