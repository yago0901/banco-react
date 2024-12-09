import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IModal } from '../Modal/types';
import { useQuery } from "react-query";
import { fetchHistory } from './util';
import { IHistory } from './tipes';

import './styles.scss'

const History = ({ setModalIsOpen }: IModal) => {

  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = Number(storedUser.id);

  const { data: history, error, isLoading } = useQuery("historyData", fetchHistory);

  if (isLoading) return <div>Carregando criação de usuário...</div>;
  if (error) return <div>Erro na criação de usuário...</div>;
  const userHistory = history.filter((item: IHistory) => item.clientID === userId);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formattedDate = (value: string) => { 
    const date = new Date(value);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(date);
  };

  return (
    <div className='history'>
      <h1>
        Histórico
      </h1>
      {userHistory.map((transition: IHistory) => {
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
              <div className='history__items__item__title'>Favorecido/a</div>
              <div>{transition.favorecido}</div>
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
              <div>{formatCurrency(transition.valor)}</div>
            </div>
            <div className='history__items__item'>
              <div className='history__items__item__title'>Data</div>
              <div>{formattedDate(transition.data)}</div>
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