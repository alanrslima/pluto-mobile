import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {PublicStack} from './PublicStack';
import {PrivateStack} from './PrivateStack';
import {useGetUserSession} from '../services/auth/useGetUserSession';
import {LoadingScreen} from '../pages/Loading';

export default function Routes() {
  const {data: user, isLoading} = useGetUserSession();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {user ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}
