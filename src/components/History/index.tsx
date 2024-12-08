import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import fakeUser from '../Fakers/fakeUser';
import { IModal } from '../Modal/types';

import './styles.scss'

const History = ({ setModalIsOpen }: IModal) => {
  
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = storedUser?.id;

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
      {fakeUser[userId -1].transitions.map((transition) => {
        return (
          <div key={transition.id} className='history__items'>
            <div className='history__items__item'>
              <div className='history__items__item__arrow'>
                {transition.action === "add" ?
                  <FontAwesomeIcon className='history__items__item__arrow__icon' icon={faArrowUp} /> :
                  <FontAwesomeIcon className='history__items__item__arrow__icon' icon={faArrowDown} />}
              </div>
            </div>
            <div className='history__items__item'>
              <div className='history__items__item__title'>CPF/CNPJ</div>
              <div>{transition.doc}</div>
            </div>
            <div className='history__items__item'>
              <div className='history__items__item__title'>Fornecido</div>
              <div>{transition.fornecido}</div>
            </div>
            <div className='history__items__item'>
              <div className='history__items__item__title'>Agência / Conta</div>
              <div>{`${transition.agencia} / ${transition.conta}`}</div>
            </div>
            <div className='history__items__item'>
              <div className='history__items__item__title'>Chave Pix</div>
              <div>{transition.chave}</div>
            </div>
            <div className='history__items__item'>
              <div className='history__items__item__title'>Banco</div>
              <div>{transition.banco}</div>
            </div>
            <div className='history__items__item'>
              <div className='history__items__item__title'>Valor</div>
              <div>{transition.valor}</div>
            </div>
            <div className='history__items__item'>
              <div className='history__items__item__title'>Data</div>
              <div>{formatDate(transition.data)}</div>
            </div>
          </div>
        )
      })}
      <div className='history__items__button'>
        <button onClick={() => setModalIsOpen(true)}>
          Nova Transação
        </button>
      </div>
    </div>
  )
};

export default History;