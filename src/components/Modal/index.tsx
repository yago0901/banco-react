import { FC, useState } from 'react';
import { IModal } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Modal: FC<IModal> = ({ setModalIsOpen }) => {

  const [chavePix, setChavePix] = useState<string>('');
  const [favored, setFavored] = useState<string>('');
  const [ag, setAg] = useState<number | undefined>(undefined);
  const [value, setValue] = useState<number | undefined>(undefined);
  const [doc, setDoc] = useState<number | undefined>(undefined);
  const [banc, setBanc] = useState<string>('');
  const [acc, setAcc] = useState<number | undefined>(undefined);

  function sendTransfer() {

    const transition = {}
    console.log('teste');
  }

  return (
    <div className="modal">
      <div className="modal__container_close" onClick={() => setModalIsOpen(false)}>
        <FontAwesomeIcon className="modal__container_close__icon" icon={faXmark} />
      </div>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__container__title">
          <h2>
            Modal Content
          </h2>
        </div>
        <div className="modal__container__inputs">
          <div className="modal__container__inputs__left">
            <div className="modal__container__inputs__left__input">
              <label>Chave Pix</label>
              <input type="text" placeholder='Chave Pix' onChange={(e) => setChavePix(e.target.value)}/>
            </div>
            <div className="modal__container__inputs__left__input">
              <label>Favorecido</label>
              <input type="text" placeholder='Favorecido' onChange={(e) => setFavored(e.target.value)}/>
            </div>
            <div className="modal__container__inputs__left__input">
              <label>Agência</label>
              <input type="number" placeholder='Agência' onChange={(e) => setAg(Number(e.target.value))}/>
            </div>
            <div className="modal__container__inputs__left__input">
              <label>Valor</label>
              <input type="number" placeholder='Valor' onChange={(e) => setValue(Number(e.target.value))}/>
            </div>
          </div>
          <div className="modal__container__inputs__right">
            <div className="modal__container__inputs__right__input">
              <label>CPF / CNPJ</label>
              <input type="text" placeholder='Documento' onChange={(e) => setDoc(Number(e.target.value))} />
            </div>
            <div className="modal__container__inputs__right__input">
              <label>Banco</label>
              <input type="text" placeholder='Banco' onChange={(e) => setBanc(e.target.value)}/>
            </div>
            <div className="modal__container__inputs__right__input">
              <label>Conta</label>
              <input type="number" placeholder='Conta' onChange={(e) => setAcc(Number(e.target.value))}/>
            </div>
            <div className="modal__container__inputs__right__input">
              <label>Data</label>
              <input type="number" placeholder='Data' />
            </div>
          </div>
        </div>
        <button onClick={() => sendTransfer()}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;