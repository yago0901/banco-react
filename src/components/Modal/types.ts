import { Dispatch } from 'react';

export interface IModal {
  setModalIsOpen: Dispatch<React.SetStateAction<boolean>>;
}