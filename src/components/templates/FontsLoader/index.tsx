import React from 'react';
import {useFonts} from 'expo-font';

export function FontsLoader({children}: {children: JSX.Element}) {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../../../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../../assets/fonts/Poppins/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <></>;
  }
  return children;
}
