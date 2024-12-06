import { IUserLogin } from '../Login';

//array para verificar se usuário está cadastrado
const fakeUsersConfirmation: IUserLogin[] = [
  {
    username: "João Silva",
    password: "teste",
    token: "teste"
  },
  {
    username: "admin",
    password: "admin",
    token: "teste"
  }
];

export default fakeUsersConfirmation;
