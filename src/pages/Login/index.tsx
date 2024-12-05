import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignJWT } from 'jose';
import './styles.scss';
import fakeUsersConfirmation from '../Fakers/fakeUsers';

export interface IUserLogin {
  username: string;
  password: string;
  token: string;
}

const Login = () => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const generateToken = async (user: string) => {
    const secret = new TextEncoder().encode('mysecret'); 
    const payload = { username: user };

    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .sign(secret); 

    return token;
  };

  const toLogin = async () => {

    const foundUser = fakeUsersConfirmation.find(
      (u) => u.username === user && u.password === password
    );

    if (foundUser) {
      // Se o usuário for encontrado, gerar o token
      const token = await generateToken(user);
      const userObj: IUserLogin = { username: user, password: password, token };
      localStorage.setItem('user', JSON.stringify(userObj));
      navigate('/Home');
    } else {

      console.log('Usuário ou senha não fornecidos');
    }
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__container__left'>
          parte de cima
        </div>
        <div className='login__container__right'>
          <label>Login</label>
          <input
            type='text'
            placeholder='E-mail'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label>Senha</label>
          <input
            type='password'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={toLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
