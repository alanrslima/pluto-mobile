import {useContext} from 'react';
import {AlertContext} from '../contexts/alert/context';

export const useAlert = () => {
  const context = useContext(AlertContext);
  return context;
};
