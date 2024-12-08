import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IModal } from '../Modal/types';
import { useQuery } from "react-query";
import { fetchHistory, formatDate } from './util';
import { IHistory, IUser } from './tipes';

import './styles.scss'

const History = ({ setModalIsOpen }: IModal) => {
  
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = storedUser.id;

  const { data: history, error, isLoading } = useQuery("historyData", fetchHistory);
  
  if (isLoading) return <div>Carregando criação de usuário...</div>;
  if (error) return <div>Ocorreu um erro: {error.message}</div>;

  const userHistory = history?.find((user:IUser) => user.id === userId);
  
  if (!userHistory || !userHistory.transitions) {
    return <div>Não há dados disponíveis para o usuário</div>;
  }

  return (
    <div className='history'>
      <h1>
        Histórico
      </h1>
      {userHistory.transitions.map((transition:IHistory) => {
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