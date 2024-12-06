import Logo from '../../assets/logo-magnum.png'
import Exit from '../../assets/right-from-bracket-solid.svg'

import { useNavigate } from 'react-router-dom';

import './styles.scss'

const Menu = () => {

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <div className='menu'>
      <div className='menu__container'>
        <img src={Logo} alt="Logo" className='menu__container__logo' />
        <div className='menu__container__exit' onClick={() => logout()}>
          <img src={Exit} alt="Sair" className='menu__container__exit__img' />
        </div>
      </div>
    </div>
  )
};

export default Menu;
