import { FC } from 'react';
import { IModal } from './types';
import './styles.scss';

const Modal: FC<IModal> = ({ setModalIsOpen }) => {
  return (
    <div className="modal">
      <h2>Modal Content</h2>
      <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
    </div>
  );
};

export default Modal;