import { useState } from 'react';
import History from '../History';
import Modal from '../Modal';
import { useQuery } from 'react-query';
import { fetchUsers } from '../../pages/Login/util';
import { IUser } from '../History/tipes';
import './styles.scss'

const Body = () => {

  const [modaIsOpen, setModalIsOpen] = useState<boolean>(false);

  const { data: users, error, isLoading } = useQuery("usersData", fetchUsers)

  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = storedUser.id;

  if (isLoading) return <div>Carregando saldo...</div>;
  if (error) return <div>Carregando saldo...</div>;

  const userHistory = users?.find((user: IUser) => user.id === userId);

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(userHistory.currentBalance);

  return (
    <div className='body'>
      {modaIsOpen &&
        <div onClick={() => setModalIsOpen(false)} className='body__backdrop'>
          <Modal setModalIsOpen={setModalIsOpen} />
        </div>
      }
      <div className='body__container'>
        <div className='body__container__user_data'>
          <h1>
            Bem vindo,
          </h1>
          <p>
            {userHistory.name}
          </p>
          <p>
            Agência:16159-1 Conta: 59486-6
          </p>
          <p>
            Saldo: {formattedValue}
          </p>
        </div>
        <History setModalIsOpen={setModalIsOpen} />
      </div>
    </div>
  )
};

export default Body;
