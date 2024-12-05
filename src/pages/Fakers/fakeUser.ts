//usuário para apresentar quando logado

interface Ihistory {
  id: number; 
  tipo: 'pix' | 'ted';
  type: 'add' | 'remove',
  valor: number; 
  data: string; 
  description: string; 
}

interface IUser {
  id: number; 
  name: string; 
  currentBalance: number;
  transitions: Ihistory[]; 
}

const fakeUser:IUser = {
  id: 123, 
  name: "João Silva", 
  currentBalance: 1000.5, 
  transitions: [
    {
      id: 1, 
      tipo: "pix",
      type: "add",
      valor: 250.0, 
      data: "2024-12-01T12:00:00Z", 
      description: "Pagamento de fatura", 
    },
    {
      id: 2,
      tipo: "ted",
      type: "add",
      valor: 150.0,
      data: "2024-12-02T14:30:00Z",
      description: "Compra no mercado",
    },
    {
      id: 3,
      tipo: "pix",
      type: "remove",
      valor: 500.0,
      data: "2024-12-03T09:00:00Z",
      description: "Depósito bancário",
    },
  ],
};

export default fakeUser;