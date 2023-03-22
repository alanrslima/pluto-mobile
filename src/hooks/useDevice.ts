import {useContext} from 'react';
import {DeviceContext} from '../contexts/device/context';

export const useDevice = () => {
  const deviceContext = useContext(DeviceContext);
  return deviceContext;
};
