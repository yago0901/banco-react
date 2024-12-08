import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRegister, IRegisterError, IUserLogin } from './types';
import { useMutation, useQuery } from "react-query";
import { fetchUsers, generateToken } from './util';
import axios from 'axios';
import './styles.scss';

const Login = () => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [nameRegister, setNameRegister] = useState<string>('');
  const [passwordRegister, setPasswordRegister] = useState<string>('');
  const [newBalance, setNewBalance] = useState<number>(0);

  const [registerOn, setRegisterOn] = useState<boolean>(false);

  const navigate = useNavigate();
  
  const { data: users, error, isLoading } = useQuery("usersData", fetchUsers)
  
  const idUsers: number = users.length +1;
  
  const { mutate: registerUser, isLoading: isRegistering, error: registerError } = useMutation(
    async ({ username, password, balance }: IRegister) => {
      const token = await generateToken(username);
      const response = await axios.post('http://localhost:5000/user', { id: idUsers, username: username, password,balance: balance, token: token });
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log('Usuário registrado com sucesso:', data);
        setNameRegister('');
        setPasswordRegister('');
        setNewBalance(0);
        setRegisterOn(false);
      },
      onError: (error: IRegisterError) => {
        console.error('Erro ao registrar o usuário:', error);
      },
    }
  );

  const toLogin = async () => {

    const foundUser = users.find(
      (u:IRegister) => u.username === user && u.password === password
    );

    if (foundUser) {
      const userObj: IUserLogin = { id: foundUser.id, username: user, password: password, token: foundUser.token };
      localStorage.setItem('user', JSON.stringify(userObj));
      navigate('/Home');
    } else {
      console.log('Usuário ou senha não fornecidos');
    }
  };

  if (isRegistering) return <div>Carregando usuários...</div>;
  if (registerError) return <div>Ocorreu um erro: {registerError.message}</div>;  
  
  if (isLoading) return <div>Carregando criação de usuário...</div>;
  if (error) return <div>Ocorreu um erro: {error.message}</div>;  

  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__container__left'>
          parte de cima
        </div>
        <div className='login__container__right'>
          {registerOn ?
            <div className='login__container__right__content'>
              <h1 >Registre sua conta</h1>
              {registerError && <p>Erro ao registrar: {registerError.message}</p>}
              {isRegistering && <p>Registrando...</p>}
              <div className='login__container__right__content__login'>
                <label>Nome</label>
                <input
                  type='text'
                  placeholder='EX: João da Silva'
                  value={nameRegister}
                  onChange={(e) => setNameRegister(e.target.value)}
                />
              </div>
              <div className='login__container__right__content__password'>
                <label>Senha</label>
                <input
                  type='text'
                  placeholder='Senha'
                  value={passwordRegister}
                  onChange={(e) => setPasswordRegister(e.target.value)}
                />
              </div>
              <div className='login__container__right__content__password'>
                <label>Saldo</label>
                <input
                  type='number'
                  placeholder='200'
                  value={newBalance}
                  onChange={(e) => setNewBalance(Number(e.target.value))}
                />
              </div>
              <button className='login__container__right__content__login_button'
                onClick={() => registerUser({ name: nameRegister, password: passwordRegister, balance: newBalance })}>
                Registrar
              </button>
              <div className='login__container__right__content__actions'>
                <button onClick={() => setRegisterOn(false)}>Voltar</button>
                <button>Esqueci a senha</button>
              </div>
            </div> :
            <div className='login__container__right__content'>
              <h1 >Acesse sua conta</h1>
              <div className='login__container__right__content__login'>
                <label>Login</label>
                <input
                  type='text'
                  placeholder='E-mail'
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className='login__container__right__content__password'>
                <label>Senha</label>
                <input
                  type='password'
                  placeholder='Senha'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className='login__container__right__content__login_button' onClick={toLogin}>Login</button>
              <div className='login__container__right__content__actions'>
                <button onClick={() => setRegisterOn(true)}>Registrar</button>
                <button>Esqueci a senha</button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
