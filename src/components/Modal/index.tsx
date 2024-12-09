import { FC, useState } from 'react';
import { IModal } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IHistory } from '../History/tipes';
import './styles.scss';
import { useMutation, useQuery } from 'react-query';
import { fetchHistory } from '../History/util';
import axios from 'axios';

const Modal: FC<IModal> = ({ setModalIsOpen }) => {

  const [chavePix, setChavePix] = useState<string>('');
  const [favored, setFavored] = useState<string>('');
  const [ag, setAg] = useState<number | undefined>(undefined);
  const [value, setValue] = useState<number | undefined>(undefined);
  const [doc, setDoc] = useState<number | undefined>(undefined);
  const [banc, setBanc] = useState<string>('');
  const [acc, setAcc] = useState<number | undefined>(undefined);

  const currentDate:string = new Date().toISOString();

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(new Date(currentDate));

  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = Number(storedUser.id);

  const { data: history, error, isLoading } = useQuery("historyData", fetchHistory);

  const userHistory = history.filter((item: IHistory) => item.clientID === userId);

  const { mutate: registerHistory, isLoading: loginHistory, error: historyError } = useMutation(
    async (transition: IHistory) => {
      const response = await axios.post('http://localhost:5000/history', transition);
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log('Usuário registrado com sucesso:', data);
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          console.error('Erro ao registrar o histórico:', error.response?.data);
        } else {
          console.error('Erro desconhecido:', error);
        }
      }
    }
  );

  function sendTransfer() {
    if (doc !== undefined && ag !== undefined && acc !== undefined && value !== undefined) {
      const transition: IHistory = {
        id: userHistory.length,
        clientID: userId,
        tipo: 'pix',
        chave: chavePix,
        action: 'remove',
        doc: doc,
        favorecido: favored,
        agencia: ag,
        conta: acc,
        banco: banc,
        valor: value,
        data:currentDate,
        description: ''
      };
      registerHistory(transition);
      setModalIsOpen(false);
    }
  }

  
  if (isLoading) return <div>Carregando criação de usuário...</div>;
  if (error) return <div>Erro ao carregar os dados.</div>;  
  if (loginHistory) return <div>Carregando criação de usuário...</div>;
  if (historyError) return <div>Erro ao carregar os dados do histórico.</div>; 

  return (
    <div className="modal">
      <div className="modal__container_close" onClick={() => setModalIsOpen(false)}>
        <FontAwesomeIcon className="modal__container_close__icon" icon={faXmark} />
      </div>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__container__divider">
          <h2>
            Dados da Transação
          </h2>
          <div className="modal__container__divider__inputs">
            <div className="modal__container__divider__inputs__left">
              <div className="modal__container__divider__inputs__left__input">
                <label>Chave Pix</label>
                <input type="text" placeholder='Chave Pix' onChange={(e) => setChavePix(e.target.value)} required/>
              </div>
              <div className="modal__container__divider__inputs__left__input">
                <label>Favorecido</label>
                <input type="text" placeholder='Favorecido' onChange={(e) => setFavored(e.target.value)} required/>
              </div>
              <div className="modal__container__divider__inputs__left__input">
                <label>Agência</label>
                <input type="text" placeholder='Agência' onChange={(e) => setAg(Number(e.target.value))} required/>
              </div>
              <div className="modal__container__divider__inputs__left__input">
                <label>Valor</label>
                <input type="text" placeholder='Valor' onChange={(e) => setValue(Number(e.target.value))} required/>
              </div>
            </div>
            <div className="modal__container__divider__inputs__right">
              <div className="modal__container__divider__inputs__right__input">
                <label>CPF / CNPJ</label>
                <input type="text" placeholder='Documento' onChange={(e) => setDoc(Number(e.target.value))} required/>
              </div>
              <div className="modal__container__divider__inputs__right__input">
                <label>Banco</label>
                <input type="text" placeholder='Banco' onChange={(e) => setBanc(e.target.value)} required/>
              </div>
              <div className="modal__container__divider__inputs__right__input">
                <label>Conta</label>
                <input type="text" placeholder='Conta' onChange={(e) => setAcc(Number(e.target.value))} required/>
              </div>
              <div className="modal__container__divider__inputs__right__input">
                <label>Data</label>
                <label>{formattedDate}</label>
              </div>
            </div>
          </div>
          <div className="modal__container__divider__actions">
            <button onClick={() => setModalIsOpen(false)}>Voltar</button>
            <button onClick={() => sendTransfer()}>Efetuar transação</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;