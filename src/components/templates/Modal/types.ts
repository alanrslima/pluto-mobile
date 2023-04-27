import {ReactNode} from 'react';

export type ModalProps = {
  title?: string;
  children: ReactNode;
};

export type ModalHandle = {
  show: () => void;
  hide: () => void;
};
