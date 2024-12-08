
import { useState } from 'react';
import fakeUser from '../Fakers/fakeUser';
import History from '../History';
import Modal from '../Modal';
import './styles.scss'

const Body = () => {

  const [modaIsOpen, setModalIsOpen] = useState<boolean>(false);

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(fakeUser[0].currentBalance);

  return (
    <div className='body'>
      {modaIsOpen &&
        <div onClick={() => setModalIsOpen(false)} className='body__backdrop'>
          <Modal setModalIsOpen={setModalIsOpen}/>
        </div>
      }
      <div className='body__container'>
        <div className='body__container__user_data'>
          <h1>
            Bem vindo,
          </h1>
          <p>
            {fakeUser[0].name}
          </p>
          <p>
            Agência:16159-1 Conta: 59486-6
          </p>
          <p>
            Saldo: {formattedValue}
          </p>
        </div>
        <History setModalIsOpen={setModalIsOpen}/>
      </div>
    </div>
  )
};

export default Body;
