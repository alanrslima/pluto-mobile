import {createContext} from 'react';
import {AlertContextProps} from './types';

export const AlertContext = createContext<AlertContextProps>(
  {} as AlertContextProps,
);
