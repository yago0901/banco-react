import { FC } from 'react';
import { IModal } from './types';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal: FC<IModal> = ({ setModalIsOpen }) => {
  return (
    <div className="modal">
      <div className="modal__container_close" onClick={() => setModalIsOpen(false)}>
        <FontAwesomeIcon className="modal__container_close__icon" icon={faXmark} />
      </div>
      <div></div>
      <h2>Modal Content</h2>
      <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
    </div>
  );
};

export default Modal;