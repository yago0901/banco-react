import { IUserLogin } from '../../pages/Login';

//array para verificar se usuário está cadastrado
const fakeUsers: IUserLogin[] = [
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

export default fakeUsers;
