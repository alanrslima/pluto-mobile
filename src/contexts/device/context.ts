import {createContext} from 'react';
import {DeviceContextProps} from './types';

export const DeviceContext = createContext<DeviceContextProps>(
  {} as DeviceContextProps,
);
