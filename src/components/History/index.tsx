import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import fakeUser from '../Fakers/fakeUser';
import { IModal } from '../Modal/types';

import './styles.scss'

const History = ({setModalIsOpen}:IModal) => {

  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='history'>
      <h1>
        Histórico
      </h1>
      <div className='history__items'>
        <div className='history__items__item'>
          <div className='history__items__item__arrow'>
            {fakeUser.transitions[0].action === "add" ?
              <FontAwesomeIcon className='history__items__item__arrow__icon' icon={faArrowUp} /> :
              <FontAwesomeIcon className='history__items__item__arrow__icon' icon={faArrowDown} />}
          </div>
        </div>
        <div className='history__items__item'>
          <div className='history__items__item__title'>CPF/CNPJ</div>
          <div>{fakeUser.transitions[0].doc}</div>
        </div>
        <div className='history__items__item'>
          <div className='history__items__item__title'>Fornecido</div>
          <div>{fakeUser.transitions[0].fornecido}</div>
        </div>
        <div className='history__items__item'>
          <div className='history__items__item__title'>Agência / Conta</div>
          <div>{`${fakeUser.transitions[0].agencia} / ${fakeUser.transitions[0].conta}`}</div>
        </div>
        <div className='history__items__item'>
          <div className='history__items__item__title'>Chave Pix</div>
          <div>{fakeUser.transitions[0].chave}</div>
        </div>
        <div className='history__items__item'>
          <div className='history__items__item__title'>Banco</div>
          <div>{fakeUser.transitions[0].banco}</div>
        </div>
        <div className='history__items__item'>
          <div className='history__items__item__title'>Valor</div>
          <div>{fakeUser.transitions[0].valor}</div>
        </div>
        <div className='history__items__item'>
          <div className='history__items__item__title'>Data</div>
          <div>{formatDate(fakeUser.transitions[0].data)}</div>
        </div>
      </div>
      <div className='history__items__button'>
        <button onClick={() => setModalIsOpen(true)}>
          Nova Transação
        </button>
      </div>
    </div>
  )
};

export default History;