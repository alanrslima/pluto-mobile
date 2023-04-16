// import {SessionProvider} from 'next-auth/react';
import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '../../../services/queryClient';
import {RootProviderProps} from './types';
import {useFonts} from 'expo-font';
import {Contexts} from '../../../contexts';

export function RootProvider({children}: RootProviderProps) {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../../../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../../assets/fonts/Poppins/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Contexts>{children}</Contexts>
    </QueryClientProvider>
  );
}
