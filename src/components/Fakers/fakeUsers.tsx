import { IUserLogin } from '../../pages/Login/types';

//array para verificar se usuário está cadastrado
const fakeUsers: IUserLogin[] = [
  {
    id:1,
    username: "João Silva",
    password: "teste",
    token: "teste"
  },
  {
    id:2,
    username: "admin",
    password: "admin",
    token: "teste"
  }
];

export default fakeUsers;
