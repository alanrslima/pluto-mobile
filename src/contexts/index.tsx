import React from 'react';
import {DeviceProvider} from './device/provider';
import {ThemeProvider} from './theme/provider';
import {AlertProvider} from './alert/provider';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const Contexts: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <SafeAreaProvider>
      <DeviceProvider>
        <ThemeProvider>
          <AlertProvider>{children}</AlertProvider>
        </ThemeProvider>
      </DeviceProvider>
    </SafeAreaProvider>
  );
};
