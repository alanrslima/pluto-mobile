import React from 'react';
import {DeviceProvider} from './device/provider';
import {ThemeProvider} from './theme/provider';

export const Contexts: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <DeviceProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </DeviceProvider>
  );
};
