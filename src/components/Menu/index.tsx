import Logo from '../../assets/logo-magnum.png'
import Exit from '../../assets/right-from-bracket-solid.svg'

import './styles.scss'

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menu__container'>
        <img src={Logo} alt="Logo" className='menu__container__logo' />
        <img src={Exit} alt="Sair" className='menu__container__exit'/>
      </div>
    </div>
  )
};

export default Menu;
